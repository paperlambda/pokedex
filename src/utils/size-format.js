export const formatHeightInMeter = height => {
  const heightInMeter = (height / 10).toFixed(1)
  return `${heightInMeter} m`
}

export const formatWeightInKilogram = weight => {
  const weightInKilogram = (weight / 10).toFixed(1)
  return `${weightInKilogram} kg`
}
