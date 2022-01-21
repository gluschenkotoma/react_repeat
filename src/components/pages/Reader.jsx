import { Component } from 'react';
import { Controls } from 'components/Reader/Controls';
import { Progress } from 'components/Reader/Progress';
import { Publication } from 'components/Reader/Publication';

// import * as API from 'services/publicationsApi';
import { getPublication, deletePublication } from 'services/publicationsApi';

// const LS_KEY = 'reader_item_index';

export class Reader extends Component {
  state = {
    index: 0,
    items: [],
    isLoading: false,
  };
  //value - на сколько изменять
  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  deleteItem = async () => {
    const { index, items } = this.state;
    const currentItem = items[index]; //[][0]undefined
    try {
      await deletePublication(currentItem.id);
      this.setState(state => ({
        items: state.items.filter(item => item.id !== currentItem.id),
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const items = await getPublication();
      // console.log(items); //(12) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
      // записать items в стейт которые пришли с фетча (перезаписать стейт)
      this.setState({ isLoading: false });
      this.setState({ items });
    } catch (error) {
      console.log(error);
    }
  }

  // componentDidMount() {
  //   const savedState = localStorage.getItem(LS_KEY);
  //   if (savedState) {
  //     this.setState({ index: Number(savedState) });
  //   }
  // }

  // componentDidUpdate(_, prevState) {
  //   if (prevState.index !== this.state.index) {
  //     localStorage.setItem(LS_KEY, this.state.index);
  //   }
  // }

  render() {
    // this.props.item = масив,this.state.index - индекс активного элемента, выбор обьекта по индексу из массива
    // console.log(this.props.items[this.state.index]);
    // const currentItem = this.props.items[this.state.index];
    const { index, items, isLoading } = this.state;
    const currentItem = items[index]; //[][0]undefined
    const totalItems = items.length;

    return (
      <div>
        {/* <section>
          <button
            type="button"
            disabled={this.state.index === 0}
            onClick={() => this.changeIndex(-1)}
          >
            Back
          </button>
          <button
            type="button"
            disabled={this.state.index + 1 === this.props.items.length}
            onClick={() => this.changeIndex(1)}
          >
            Вперед
          </button>
        </section>

        <p>
          {this.state.index + 1}/{this.props.items.length}
        </p>

        <article>
          <h2>{currentItem.title}</h2>
          <p>{currentItem.text}</p>
        </article> */}

        {/*  */}
        {isLoading && <div>Download...</div>}
        {!isLoading && totalItems === 0 && <div>Еще нет публикаций</div>}
        {!isLoading && totalItems > 0 && (
          <>
            <button type="button" onClick={this.deleteItem}>
              Delete publication
            </button>
            <Controls
              current={index + 1}
              total={totalItems}
              onChange={this.changeIndex}
            />
            <Progress current={index + 1} total={totalItems} />
            {currentItem && <Publication item={currentItem} />}
          </>
        )}
      </div>
    );
  }
}
