import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import AddEvent from './components/AddEvent';
import Events from './components/Events';
import Footer from './components/Footer';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const [events, setEvents] = useState([]);
  const [newEvents, setNewEvents] = useState(true);

  useEffect(() => {
    if (newEvents) {
      const fetchData = async () => {
        const res = await axios.get(
          'https://json-server-evently.herokuapp.com/events/?_sort=date&_order=asc',
          //for local use: http://localhost:3001/events/?_sort=date&_order=asc
        );
        setEvents(res.data);
      };
      fetchData();
      setNewEvents(false);
    }
  }, [newEvents]);

  return (
    <Router>
      <Header />
      <main>
        <GlobalStyle />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Events events={events} setNewEvents={setNewEvents} />
            )}
          />
          <Route
            exact
            path="/new"
            render={() => <AddEvent setNewEvents={setNewEvents} />}
          />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
