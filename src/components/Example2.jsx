import { useState } from 'react';
import { createPortal } from 'react-dom';

const Modal = () => {
  return createPortal(
    <div style={{ width: 400, height: 400, backgroundColor: 'lightblue' }}>
      Modal window
    </div>,
    document.querySelector('#modal-root')
  );
};

export const Example2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = () => {
    setIsModalOpen(isOpen => !isOpen);
  };

  return (
    <div
      style={{
        width: 300,
        height: 150,
        backgroundColor: 'green',
        overflow: 'hidden', //обрезание
      }}
    >
      <button onClick={onClick}>Toggle modal</button>

      {isModalOpen && <Modal />}
    </div>
  );
};
