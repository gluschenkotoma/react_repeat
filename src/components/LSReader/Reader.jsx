import { useState, useEffect } from 'react';
import { useMountedState } from 'react-use';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publication';

const LS_KEY = 'reader_item_index';

export const Reader = ({ items }) => {
  // const isMounted = useRef(false) //значение которое не меняется между рендерами
  // смонтирован isMounted или не смонтирован
  const isMounted = useMountedState();
  // const [index, setIndex] = useState();
  const [index, setIndex] = useState(() => {
    const savedState = localStorage.getItem(LS_KEY);
    return savedState ? Number(savedState) : 0;
  }); //вызывается 1 раз при монтировании

  const changeIndex = value => {
    // this.setState(state => ({ index: state.index + value }));
    setIndex(prevIndex => prevIndex + value);
  };

  useEffect(() => {
    if (isMounted()) {
      localStorage.setItem(LS_KEY, index);
    }
  }, [index, isMounted]);

  const totalItems = items.length;
  const currentItem = items[index];

  return (
    <div>
      <Controls current={index + 1} total={totalItems} onChange={changeIndex} />
      <Progress current={index + 1} total={totalItems} />
      <Publication item={currentItem} />
    </div>
  );
};

// isMounted-что бы не запускался при монтировании

// import { Component } from 'react';
// import { Controls } from './Controls';
// import { Progress } from './Progress';
// import { Publication } from './Publication';

// const LS_KEY = 'reader_item_index';

// export class Reader extends Component {
//   state = {
//     index: 0,
//   };

//   changeIndex = value => {
//     this.setState(state => ({ index: state.index + value }));
//   };

//   componentDidMount() {
//     const savedState = localStorage.getItem(LS_KEY);
//     if (savedState) {
//       this.setState({ index: Number(savedState) });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.index !== this.state.index) {
//       localStorage.setItem(LS_KEY, this.state.index);
//     }
//   }
// ====================

// useEffect(() => { const savedState = local.Storage.getItem(LS_KEY)
//   if (savedState) {
//    setIndex(Number(savedState)
//   }

// }, []);  //только при монтировании
// useEffect(() => { localStorage.setItem((LS_KEY, index)}, [index])   //при обновлении index
// ======================

//   render() {
//     const { index } = this.state;
//     const { items } = this.props;
//     const totalItems = items.length;
//     const currentItem = items[index];

//     return (
//       <div>
//         <Controls
//           current={index + 1}
//           total={totalItems}
//           onChange={this.changeIndex}
//         />
//         <Progress current={index + 1} total={totalItems} />
//         <Publication item={currentItem} />
//       </div>
//     );
//   }
// }
