// import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DianomiContextFeedReact } from '../.';

const App = () => {
  return <DianomiContextFeedReact id={712} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
