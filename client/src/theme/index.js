import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue100, blue500, blue700 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme(
  {
    palette: {
      primary1Color: blue500,
      primary2Color: blue700,
      primary3Color: blue100
    }
  },
  {
    avatar: {
      borderColor: null
    }
  }
);

export default muiTheme;
