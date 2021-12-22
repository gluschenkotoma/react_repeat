import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { formatEventStart, formatEventDuration } from 'utils';

export const Event = ({ event: { name, location, speaker, type, time } }) => {
  // const{name, locstion,speacker,}=event;
  return (
    <div>
      <h2>{name}</h2>
      <p>
        <i>
          <FaMapMarkerAlt color="green" size="23" />
        </i>
        {location}
      </p>
      <p>
        <i>
          <FaUserAlt />
        </i>
        {speaker}
      </p>
      <p>
        <i>
          <FaCalendarAlt />
        </i>
        {/* функция передачи формата времени */}
        {formatEventStart(time.start)}
      </p>
      <p>
        <i>
          <FaClock />
        </i>
        {/* Duration, time.start, time.end - props from {}*/}
        {formatEventDuration(time.start, time.end)}
      </p>
      <span>{type}</span>
    </div>
  );
};

// может быть 1 проп имя с обьекта({name}) -> (prop.name) -> prop from EventBoard ->name={event.name}
// а может быть сразу весь массив пропоав - name={event} -> ({ event })

// format - преобразование дати json в читабельный формат дыты
// formatDistanceStrict - разница между началом и концом даты
