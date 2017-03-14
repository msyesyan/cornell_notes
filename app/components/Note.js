import React, {Component, PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List';
import Record from './Record';

const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}

class Note extends Component {
  constructor(props) {
    super(props);
    this.addRecord = this.addRecord.bind(this);
    this.saveRecord = this.saveRecord.bind(this);
    this.state = {
      records: [{
        id: uuid(),
        content: 'first'
      }, {
        id: uuid(),
        content: 'second'
      }]
    }
  }

  addRecord(props) {
    const newRecord = Object.assign(props, {
      id: uuid()
    });
    this.setState({
      records: [...this.state.records, newRecord]
    })
  }

  saveRecord() {
    console.log('saveRecord')
  }

  render() {
    const recordList = <List className="records"
                             children={[...this.state.records.map(
                                        record => <Record key={record.id.toString()}
                                                          model={record}
                                                          onSave={this.saveRecord} />
                                      ), <Record key='_new' model={{content: ''}} onSave={this.addRecord} />]} />;

    return (
      <MuiThemeProvider>
        <Paper style={{minHeight: '400px', margin: '0 10%', padding: '1%'}}
          children={recordList} />
      </MuiThemeProvider>
    );
  }
};

export default Note;
