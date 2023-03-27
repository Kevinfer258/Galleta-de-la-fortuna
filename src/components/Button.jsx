import RandomPhrases from "../utils/RandomPhrases"
import Phrases from '../utils/phrases.json'
const Button = ( {seTPhrasesRandom,  setNumberimg} ) => {
  const ClickBotton = () => {
    seTPhrasesRandom(RandomPhrases(Phrases))
    setNumberimg(RandomPhrases([1,2,3,4]))
  }
  return (
    <button className="app__btn" onClick={ClickBotton}>Probar Mi Suerte</button>
  )
}

export default Button