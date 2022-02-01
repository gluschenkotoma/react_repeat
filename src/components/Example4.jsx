//просто закрыть кнопкой иконкой модальное окно

import { useState } from 'react';

const IconButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      IconButton
    </button>
  );
};

export const Example4 = () => {
  const [isOpen, setIsOpen] = useState(true); //будет изначально открыто
  return (
    <div>
      <IconButton onClick={() => setIsOpen(false)} />
      {isOpen && (
        <div style={{ width: 300, height: 150, backgroundColor: 'orange' }}>
          Modal window
        </div>
      )}
    </div>
  );
};
