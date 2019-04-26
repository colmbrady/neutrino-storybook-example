import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@storybook/react/demo';

const App = () => <div><span>Hello World!</span><f:image /><Button onClick={() => alert('Hi')}>Hello Button</Button></div>;
ReactDOM.render(<App />, document.getElementById('root'));