import { HStack } from '@tapie-kr/inspire-react';
import Snowfall from 'react-snowfall';
import Background from './components/Background';
import Header from './components/Header';
import LetterBoxList from './components/LetterBoxList';
import RollingPaperModal from './components/Modal/RollingPaperModal';

function App() {
  return (
    <>
      <Background>
        <Header />
        <HStack fullWidth>
          <LetterBoxList />
        </HStack>
        <RollingPaperModal />
        <Snowfall />
      </Background>
    </>
  );
}

export default App;
