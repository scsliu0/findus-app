import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue600, red600, grey900} from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: blue600
  },
  drawer: {
      width: 230,
      color: grey900
  },
  raisedButton: {
      primaryColor: blue600,
      secondaryColor: red600
  }
});


export default themeDefault;
