import { useState } from 'react';
import Header from './components/Header';
import LetterBox from './components/LetterBox';
import { LetterBoxTheme } from './components/LetterBox/shared';
import RollingPaperModal from './components/Modal/RollingPaperModal';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Header />
      <LetterBox
        from={'권지원'}
        content={'감사했습니다. 싸장님'}
        theme={LetterBoxTheme.PINK}
        rotate={0}
      />
      <RollingPaperModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}></RollingPaperModal>
    </>
  );
}

export default App;
