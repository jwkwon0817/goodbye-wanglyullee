import { useState } from "react"
import Header from "./components/Header"
import RollingPaperModal from "./components/Modal/RollingPaperModal"

function App() {
  const [isModalVisible, setIsModalVisible] = useState(true)
  return (
    <>
      <Header />
      <RollingPaperModal visible={isModalVisible} onClose={() => setIsModalVisible(false)}></RollingPaperModal>
    </>
  )
}

export default App;
