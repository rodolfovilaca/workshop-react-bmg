import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import YoutubePage from './pages/YoutubePage'
import registerServiceWorker from './registerServiceWorker';
import YoutubePage from './components/YoutubePage';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

const Root = () => (
<MuiThemeProvider theme={theme}>
	<YoutubePage />
</MuiThemeProvider>)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
