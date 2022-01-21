import { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

export class Player extends Component {
  state = {
    isVideoLoaded: false,
  };

  componentDidUpdate(prevProps) {
    // this.setState({ isVideoLoaded: false }); - зацыклит компонент
    // если предсостояние не равно настоящему, то видео не загрузилось
    if (prevProps.url !== this.props.url) {
      this.setState({ isVideoLoaded: false });
    }
  }

  render() {
    const { isVideoLoaded } = this.state;
    const { url } = this.props;
    const showLoader = url && !isVideoLoaded;
    // для коректной загрузки,  width={playerSize}  height = { playerSize };
    const playerSize = isVideoLoaded ? '100%' : 0;

    return (
      <>
        {/* url - это уже выбраный url, пока url нет спинера отображать безсмыслено, спинер появится когда будет выбран url, и удалится когда onReady приведется к true */}
        {/* {url && !isVideoLoaded && <h2>Загружаем видео...</h2>} */}
        {showLoader && <h2>Загружаем видео...</h2>}
        {url && (
          <PlayerWrapper>
            <StyledPlayer
              url={url}
              width={playerSize}
              height={playerSize}
              onReady={() => this.setState({ isVideoLoaded: true })}
              controls
            />
          </PlayerWrapper>
        )}
      </>
    );
  }
}

// import ReactPlayer from 'react-player';
// controls - панель плеера
// url &&  - если url есть(selectedVideo не null), тогда рендер плеера
// isVideoLoaded: false, - загрузилось видео или нет, изначально нет, !isVideoLoaded приводится к true - выводим или спиннер или <h2>Загружаем видео...</h2>
// onReady={() => this.setState({ isVideoLoaded: true })} дает знать загрузилось видео или нет
