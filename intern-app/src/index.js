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

  inputChange(){

    let val=this.refs.num.value;
    this.setState({
      num:val
    })
  }
  getInputValue(){
    window.alert("Hello world!");
  }

  render()
  {
    return(
      <table>
        {this.createTable()}
      </table>
    )
  };
}

ReactDOM.render(
  <Table/>,
  document.getElementById('2dArray')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
