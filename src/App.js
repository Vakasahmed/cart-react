import React, { useEffect,useMemo, useState } from "react"
import { Button, Modal } from 'antd'
import bday from './video/bday.mp4'
import bdance from './video/bdance.gif'
import bday1 from './video/bday1.jpg'
import bg from './images/bg.jpeg'
import bg1 from './images/bg1.jpg'
import bg2 from './images/bg2.jpeg'
import bsong from './music/bsong.mp3'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const audio = useMemo(() => typeof Audio !== 'undefined' ? new Audio(bsong) : null, []);

  const showModal = () => {
    setIsModalOpen(true);
    audio.play(); 
    
  };

  const handleOk = () => {
    setIsModalOpen(false);
    audio.pause();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    audio.pause();
  };

  return (
    <body className="body">
      <main style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '95%'
      }} className="main">
        <Modal title="Basic Modal" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <h2>🎆Happy Birthday Dear Nida🎆</h2>
          <img src={bdance} width={'400px'} alt="Birthday Dance" />
        </Modal>
      </main>
      <div className="btn">
        <Button type="primary" onClick={showModal}>
          Click Here Nida Ji
        </Button>
      </div>
    </body>
  );
}

export default App;
