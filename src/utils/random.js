const getRandomElement = (elements) => {
    // ? logica necesaria para devolver un elemnto aleatorio de ese arreglo
    const indexRandom =  Math.floor(Math.random() * elements.length)
    return elements[indexRandom]
  }

  export { getRandomElement};