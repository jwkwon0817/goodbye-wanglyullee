import LetterBox, {LetterBoxTheme} from "./components/letterBox";


function App() {
  return (
    <>
      <LetterBox content="Hello, World!" from="Wanglyullee" theme={LetterBoxTheme.PINK}/>
    </>
  )
}

export default App
