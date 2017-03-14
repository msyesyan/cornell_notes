import React, {PropTypes, Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';

class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.model.content
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    })
  }

  handleKeyPress({key, target}) {
    if (key === 'Enter') {
      this.props.onSave({
        content: target.value
      });
      if (!this.props.model.id) {
        this.setState({content: ''})
      }
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <TextField
          value={this.state.content}
          fullWidth={true}
          hintText='Type text and enter to add a new record'
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress} />
      </MuiThemeProvider>
    );
  }
}

Record.propTypes = {
  model: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired
}

export default Record;
