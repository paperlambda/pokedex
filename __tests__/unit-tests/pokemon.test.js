describe('Pokemon | Unit test', () => {
  const mockPokemon = {
    id: 384,
    name: 'Rayquaza',
    types: [
      {
        type: {
          name: 'Dragon'
        },
        slot: 1
      },
      {
        type: {
          name: 'Flying'
        },
        slot: 2
      }
    ],
    height: 70,
    weight: 2065,
    sprites: {
      front_default: 'https://bulbapedia.bulbagarden.net/wiki/File:384Rayquaza.png'
    },
    abilities: [
      {
        ability: {
          name: 'Airlock'
        },
        is_hidden: false
      }
    ]
  }

  test('it has Pokemon ID', () => {
    expect(mockPokemon.id).not.toBe(null)
  })

  test('it has name', () => {
    expect(mockPokemon.id).not.toBe(null)
  })

  describe('it has at least one type', () => {
    expect(mockPokemon.types.length).toBeGreaterThanOrEqual(1)
    for(let i = 0; i < mockPokemon.types.length; i++) {
      test(`Type #${i+1}`, () => {
        expect(mockPokemon.types[i].slot).not.toBe(null)
        expect(mockPokemon.types[i].type.name).not.toBe(null)
        expect.assertions(2)
      })
    }
  })

  test('it has weight', () => {
    expect(mockPokemon.weight).not.toBe(null)
  })

  test('it has height', () => {
    expect(mockPokemon.height).not.toBe(null)
  })

  test('it has image sprites & 1 default image', () => {
    expect(mockPokemon.sprites).not.toBe(null)
    expect(mockPokemon.sprites.front_default).not.toBe(null)
    expect.assertions(2)
  })

  describe('it has at least one ability', () => {
    expect(mockPokemon.abilities.length).toBeGreaterThanOrEqual(1)
    for(let i = 0; i < mockPokemon.abilities.length; i++) {
      test(`Ability #${i+1}`, () => {
        expect(mockPokemon.abilities[i].is_hidden).not.toBe(null)
        expect(mockPokemon.abilities[i].ability.name).not.toBe(null)
        expect.assertions(2)
      })
    }
  })
})
