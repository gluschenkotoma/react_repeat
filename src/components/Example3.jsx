// При клике на кнопку, в инпуте должен появится фокус

import { useRef, forwardRef } from 'react'; //получить ссылку на элемент, и поставить на него фокус

const SuperInput = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

export const Example3 = () => {
  const inputRef = useRef();
  //   console.log(inputRef); //{current: undefined}еще пустой

  const onClick = () => {
    // console.log(inputRef); //{current: input}
    inputRef.current.focus(); //поставит фокус в инпут
  };

  return (
    <div>
      <button onClick={onClick}>Start doing something </button>
      <SuperInput ref={inputRef} />
    </div>
  );
};

// ref={ inputRef} специальный служебный проп не доходит до настоящих пропс, создан реф,
// <SuperInput ref={inputRef} /> пропом в компонент не ставится, только через forwardRef
