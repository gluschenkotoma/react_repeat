import { Component } from 'react';
import { Controls } from 'components/Reader/Controls';
import { Progress } from 'components/Reader/Progress';
import { Publication } from 'components/Reader/Publication';

const LS_KEY = 'reader_item_index';

export class Reader extends Component {
  state = {
    index: 0,
  };
  //value - на сколько изменять
  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      this.setState({ index: Number(savedState) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  render() {
    // this.props.item = масив,this.state.index - индекс активного элемента, выбор обьекта по индексу из массива
    // console.log(this.props.items[this.state.index]);
    // const currentItem = this.props.items[this.state.index];
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length;
    const currentItem = items[index];

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

        <Controls
          current={index + 1}
          total={totalItems}
          onChange={this.changeIndex}
        />
        <Progress current={index + 1} total={totalItems} />
        <Publication item={currentItem} />
      </div>
    );
  }
}
