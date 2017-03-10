import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';

const _handleKeyPress = ({key, target}) => {
  if (key === 'Enter') {
    createRecord({
      content: target.value
    });
  }
};

const createRecord = (props) => {
  const newRecord = {
    id: 'newRecord',
    props
  }
};

const Record = ({model}) => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <TextField defaultValue={model.content}
                 fullWidth={true}
                 hintText='Type text and enter to add a new record'
                 onKeyPress={_handleKeyPress}
                 onBlur={(event, newValue) => {console.log(newValue)}} />
    </MuiThemeProvider>
  );
}

Record.propTypes = {
  model: PropTypes.object.isRequired
}

export default Record;
