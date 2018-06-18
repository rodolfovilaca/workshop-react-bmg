import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import YoutubePage from './pages/YoutubePage'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<YoutubePage />, document.getElementById('root'));
registerServiceWorker();
