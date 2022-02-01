## Portal

```
-import { createPortal } from 'react-dom';
-передать поддерево и куда рендерить
-const Modal = () => {
  return createPortal (
    <div style={{ width: 400, height: 400, backgroundColor: 'lightblue' }}>
      Modal window
      </div>,
      document.querySelector('#modal-root')
  );
};
-index.html
-<div id="modal-root"></div>
```
