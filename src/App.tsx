import Background from "./components/Background";
import Header from "./components/Header";
import LetterBoxList from "./components/LetterBoxList";
import RollingPaperModal from "./components/Modal/RollingPaperModal";

function App() {
  return (
    <>
      <Background>
        <Header />
        <LetterBoxList />
        <RollingPaperModal />
      </Background>
    </>
  );
}

export default App;
