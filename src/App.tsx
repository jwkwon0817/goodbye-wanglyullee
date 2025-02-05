import { useState } from 'react';
import Header from './components/Header';
import LetterBoxList from './components/LetterBoxList';
import RollingPaperModal from './components/Modal/RollingPaperModal';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Header />
      <LetterBoxList />
      <RollingPaperModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}></RollingPaperModal>
    </>
  );
}

export default App;
