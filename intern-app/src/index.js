import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Mocking } from './services/mocking';
import reportWebVitals from './reportWebVitals';
//table row cell mock split draw

class DataEDIT extends React.Component {
  constructor(props) {
    super(props);
    this.mockData = new Mocking;
    this.state = {
      str: ""
    }
  }
  splitData(str = "") {
    var comma = 0;
    const len = str.length;
    for (var i = len; i > 0; i--) {
      if (comma !== 0 && comma !== this.len && comma % 3 === 0)
        str = [str.substr(0, i), str.substr(i)].join(",");
      comma += 1;
    }
    return str;
  }
  componentDidMount() {
    this.mockData.getData().then(res => {
      this.setState({
        str: this.splitData(res)
      });
    });
  }
  render() {
    return (this.state.str);
  }
}

class Table extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      cellStyle: {"text-align":"right","border": "1px solid red"},
      rowLen:2,
      colLen:3,
      num:0
    }
  }
  createTable(row = [])
  {
    for(var i=0;i < this.state.rowLen; i++)
    {
      const col = [];
      for(var j=0;j < this.state.colLen; j++)
      {
        col.push(
          <td style = {this.state.cellStyle}>
            <DataEDIT />
          </td>
        );
      }
      row.push(
        <tr>
          {col}
        </tr>);
    }
    return(row);
  }

  render()
  {
    return(
      <table>
        {this.createTable()}
      </table>
    );
  }
}

class TextChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputRow: "空空如也~",
      inputCol: "空空如也~",
    }
  }

  event_happenner = () => {
    alert(this.state.inputRow.value)
  }
  cleanRowDefault = () => {
    this.state.inputRow = "";
  }
  cleanColDefault = () => {
    this.state.inputCol = "";
  }
  render() {
    return (
      <div>
      <input type="text" ref={input => this.state.inputRow = input} onFocus = {()=>this.cleanRowDefault()} defaultValue = {this.props.inputRow} />
      <input type="text" ref={input => this.state.inputCol = input} onFocus = {()=>this.cleanColDefault()} defaultValue = {this.props.inputCol} />
      <button onClick = {()=>this.event_happenner()}>fk me</button>
      </div>
      );
  }
}


ReactDOM.render(<TextChange/>,document.getElementById('rowcolVal'));
ReactDOM.render(<Table/>,document.getElementById('2dArray'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
