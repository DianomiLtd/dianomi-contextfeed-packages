// import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DianomiContextFeed } from '../.';

const App = () => {
  return <DianomiContextFeed id={1} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
