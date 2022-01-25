import { useEffect, useState } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

export const Player = ({ url }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    setIsVideoLoaded(false);
  }, [url]); //если проп url изменяется, выполни эфект setIsVideoLoaded(false)

  const showLoader = url && !isVideoLoaded;
  const playerSize = isVideoLoaded ? '100%' : 0;

  return (
    <>
      {showLoader && <h2>Загружаем видео...</h2>}
      {url && (
        <PlayerWrapper>
          <StyledPlayer
            url={url}
            width={playerSize}
            height={playerSize}
            onReady={() => setIsVideoLoaded(true)}
            controls
          />
        </PlayerWrapper>
      )}
    </>
  );
};

// url - пропс
// useEffect(() => {setIsVideoLoaded(false);  }, [url]); если проп изменяется в масиве зависимостей, выполняется функция
// в масив зависимостей попадает значение с if, prevProps.url !==this.props.url
