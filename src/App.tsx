import LetterBox, {LetterBoxTheme} from "./components/letterBox";

function App() {
  return (
    <>
      <LetterBox content={"안녕하세요"} from={"신유준"} theme={LetterBoxTheme.PINK}/>
    </>
  )
}

export default App
