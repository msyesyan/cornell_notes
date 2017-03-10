import React from 'react';
import Panel from './Panel';
import Record from './Record';

import List from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const panelBody = (records) => {
  const recordNodes = records.map(record => <Record key={record.id.toString()} model={record}/>);

  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <List children={recordNodes} />
    </MuiThemeProvider>
  );
}

const RecordsPanel = ({records}) => {
  return (
    <Panel panelBody={panelBody(records)}>
    </Panel>
  );
}

RecordsPanel.propTypes = {
  records: React.PropTypes.array
}

RecordsPanel.defaultProps = {
  records: [{
    id: '_new'
  }]
}

export default RecordsPanel;
