import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Phrase from './components/Phrase'
import Phrases from './utils/phrases.json'
import RandomPhrases from './utils/RandomPhrases'
const imgs = [1, 2, 3, 4]
function App() {
  const [PhrasesRandom, seTPhrasesRandom] = useState(RandomPhrases(Phrases))
  const [numberimg, setNumberimg] = useState(RandomPhrases(imgs))
  const appStyle = {
    backgroundImage: `url('/fondos/fondo${numberimg}.jpg')`,
  }
  return (
    <div style={appStyle} className="App">
      <h1 className='app__title'>Galleta de la fortuna </h1>
      <Button
        seTPhrasesRandom={seTPhrasesRandom}
        setNumberimg={setNumberimg}
      />
      <Phrase PhrasesRandom={PhrasesRandom} />
      <span className='app__autor'>{PhrasesRandom.author}</span>
    </div>
  )
}

export default App
