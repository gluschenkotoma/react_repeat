import { Event } from 'components/Event/Event';

// деструктуризация с пропсов (props.events)
export const EventBoard = ({ events }) => {
  //   console.log(events); //(8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

  return (
    <div>
      {events.map(event => (
        <Event
          key={event.name}
          //   name={(event.name, event.location,event.speacker)}
          event={event}
        />
      ))}
    </div>
  );
};

// ({ events }) -[] json
// event -> {name: 'Protecting the outer rim', location:....
// {event.name } -> Protecting the outer rim
// name={event.name} ->  1 name prop from {} for Event.jsx
// name={event} -> all props from {}
