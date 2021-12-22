import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import events from '../data/events.json';

const App = props => {
  return (
    <>
      <PageTitle text="Conferencies" />
      <EventBoard events={events} />
    </>
  );
};
export default App;
