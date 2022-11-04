import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoContainer from './components/TodoContainer';
import './style.css';

const element = ReactDOM.createRoot(document.getElementById('root'));
element.render(<TodoContainer />);
