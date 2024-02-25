import React, { useEffect,useMemo,useRef, useState } from "react"
import { Button, Modal, Divider,Space,Tour } from 'antd'
import { EllipsisOutlined } from '@ant-design/icons'
import bday from './video/bday.mp4'
import bdance from './video/bdance.gif'
import bday1 from './video/bday1.jpg'
import bg from './images/bg.jpeg'
import bg1 from './images/bg1.jpg'
import bg2 from './images/bg2.jpeg'
import t1 from './images/t1.webp'
import t2 from './images/t2.png'
import t3 from './images/t3.jpg'
import bsong from './music/bsong.mp3'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const audio = useMemo(() => typeof Audio !== 'undefined' ? new Audio(bsong) : null, []);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Meri Jaan',
      description: 'Aap jaisa insan mene apni life me ni dekha aapki soch, samajhdari n mujhko weak moment par happy feel kara na meri khamiyo me mera sath dena...u r so much special for me begam. Happy birthday, baby. I love you❤️😘',
      cover: (
        <img
          alt="tour.png"
          src={t1}
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Papa ki pari',
      description: 'Tumhare bina me adhura hu papa ki pari😍💃💃. Aur meri Queen😘😘❤️❤️ i promise to never stop trying to win u over, no matter how many years we spend together....😘😘😘',
      cover: (
        <img
          alt="tour.png"
          src={t2}
        />
      ),
      target: () => ref2.current,
    },
    {
      title: 'Meri Life',
      cover: (
        <img
          alt="tour.png"
          src={t3}
        />
      ),
      description: 'Sending loads of hugs🫂🫂 and kisses😘😘😘 to the best wife💃 in the world. There is no one else in the world for me.',
      target: () => ref3.current,
    },
  ];
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
        height: '87%'
      }} className="main">
        <Modal title="Love You❤️ Sweat Heart" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <h2 style={{color:'#0080FE'}}>🎆Happy Birthday Dear Nida🎆</h2>
          <img src={bdance} width={'100%'} alt="Birthday Dance" />
          <Button type="primary" onClick={() => setOpen(true)}>
        Click Here Begum😘
      </Button>
      <Divider />
      <Tour open={open} className="tour" onClose={() => setOpen(false)} steps={steps} />
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
