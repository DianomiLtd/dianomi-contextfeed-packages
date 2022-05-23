import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DianomiContextFeed } from '../dist/dianomi-react-contextfeed.cjs.js';

const App = () => {
  return <DianomiContextFeed id={1} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
