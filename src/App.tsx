import { HStack } from '@tapie-kr/inspire-react';
import Snowfall from 'react-snowfall';
import Background from './components/Background';
import Header from './components/Header';
import LetterBoxList from './components/LetterBoxList';
import RollingPaperModal from './components/Modal/RollingPaperModal';
import { useEffect, useState } from 'react';

function App() {
  const [browserHeight, setBrowserHeight] = useState(document.body.scrollWidth);

  useEffect(() => {
    console.log(browserHeight)
    const handleResize = () => {
      setBrowserHeight(document.body.scrollWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Background>
        <Header />
        <HStack fullWidth>
          <LetterBoxList />
        </HStack>
        <RollingPaperModal />
        <Snowfall style={{
          width: '100%',
          height: browserHeight,
        }}
        snowflakeCount={700} 
        />
      </Background>
    </>
  );
}

export default App;
