import { Pokedex } from 'pokeapi-js-wrapper'

export default class PokemonService {
  constructor() {
    this.PokemonAPI = new Pokedex()
    this.limit = 10
  }

  async getPokemonList(offset) {
    try {
      const list = await this.PokemonAPI.getPokemonsList({
        limit: this.limit,
        offset
      })
      if (list) {
        const { results } = list

        const getBatchPokemon = await Promise.allSettled(
          results.map(async pokemon => {
            return await this.PokemonAPI.getPokemonByName(pokemon.name)
          })
        )

        const normalizedResponse = getBatchPokemon.map((response, index) => {
          if (response.status === 'rejected') {
            return { ...results[index], error: true }
          }

          return response.value
        })

        return normalizedResponse
      }
    } catch (e) {
      throw new Error('Failed to get Pokemon list')
    }
  }
}
