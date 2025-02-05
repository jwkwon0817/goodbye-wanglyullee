import Snowfall from "react-snowfall";
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
        <Snowfall />
      </Background>
    </>
  );
}

export default App;
