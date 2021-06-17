import { HashRouter as Router, Route } from 'react-router-dom';

import Main from './Main';

const Routing = () => {
  return <Router>
    <Route exact path="/"><Main /></Route>
  </Router>
};

export default Routing;