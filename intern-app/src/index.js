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
    }
  }
  createTable(row = [])
  {
    for(var i=0;i < this.props.rowLen; i++)
    {
      const col = [];
      for(var j=0;j < this.props.colLen; j++)
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
      newRow:1,
      newCol:1,
      inputRow: 2,
      inputCol: 2,
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        newRow: this.state.inputRow,
        newCol: this.state.inputRow
      });
    }, 5000);
  }
  event_happenner = () => {
    alert(this.state.newRow.value);
    // return
    // (
    //   <Table rowLen = {this.state.inputRow} colLen = {this.state.inputCol}/>
    // );
    // <Table rowLen = {this.state.inputRow} colLen = {this.state.inputCol}/>
  }
  render() {
    return (
      <div>
      Row<input type="number" ref={input => this.state.inputRow = input}/>
      Col<input type="number" ref={input => this.state.inputCol = input}/>
      <button onClick = {()=>this.event_happenner()}>fk me</button>
      <Table rowLen = {this.state.newRow} colLen = {this.state.newCol}/>
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
