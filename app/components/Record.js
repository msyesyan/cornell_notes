import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';

const Record = ({model}) => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <TextField defaultValue={model.content}
                 fullWidth={true}
                hintText='Type text and enter to add a new record' />
    </MuiThemeProvider>
  );
}

Record.propTypes = {
  model: PropTypes.object.isRequired
}

export default Record;
