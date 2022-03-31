import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DianomiContextFeed } from '../src';

describe('<DianomiContextFeed />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DianomiContextFeed id={1234} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
