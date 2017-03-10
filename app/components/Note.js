import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List';

import Record from './Record';

const Note = ({records}) => {
  const recordsList = <List children={records.map(record => <Record key={record.id.toString()} model={record}/>)} />;

  return (
    <MuiThemeProvider>
      <Paper style={{minHeight: '400px', margin: '0 10%', padding: '1%'}}
             children={recordsList} />
    </MuiThemeProvider>
  )
};

Note.propTypes = {
  records: PropTypes.array
}

Note.defaultProps = {
  records: [{
    id: '_new'
  }]
}

export default Note;
