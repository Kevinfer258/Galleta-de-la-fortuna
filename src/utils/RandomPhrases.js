const RandomPhrases = (array) =>{
    const IndexRandom= Math.floor( Math.random() * array.length)
    return array[IndexRandom]
   }
   export default RandomPhrases