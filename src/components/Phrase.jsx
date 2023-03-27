import React from 'react'
const Phrase = ({ PhrasesRandom }) => {
  return (
    <p className='app__phrase'>{PhrasesRandom.phrase}</p>
  )
}

export default Phrase