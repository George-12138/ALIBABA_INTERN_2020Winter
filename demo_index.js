import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Mocking } from './services/mocking';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// table row cell mock split draw
class DataEDIT extends React.Component {
  constructor(props) {
    super(props);
    this.mockData = new Mocking();
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
  constructor(props) {
    super(props);
    this.cell = { "textAlign": "right", "border": "1px solid red" };
    this.row_list = [];
    this.state = {
      colDemo: [],
      rowDemo: [],
      col_size: 4,
      row_size: 3
    }
  }
  createCell(props) {
    return (
       <td style={this.cell}>
         <DataEDIT />
       </td>
    );
  }

  createCol( ) {
     this.state.colDemo = [];
    for (var i = 0; i < this.state.col_size; i++) {
     this.state.colDemo.push(this.createCell());
    }
    return (
      <tr >
        {this.state.colDemo}
      </tr>
    );
  }

  createRow() {
    for (var i = 0; i < this.state.row_size; i++) {
      this.state.rowDemo.push(this.createCol());
    }
    return (this.state.rowDemo);
  }

  createTable() {
    return (
      <table>
        <tbody>
          {this.createRow()}
        </tbody>
      </table>
    )
  }

  render() {
    return (
      this.createTable()
    )
  };
}
class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  componentDidMount() {
    this.textInput.current.focusTextInput();
  }
  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  focusTextInput() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
ReactDOM.render(
  <AutoFocusTextInput />,
  document.querySelector("#app")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.cell = { "textAlign": "right", "border": "1px solid red" };
  }
  render() {
    return (
      <td style={this.cell}>
        <DataEDIT />
      </td>
    );
  }
}

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.celltxt = [];
    this.cell = { "textAlign": "right", "border": "1px solid red" };
  }


  callCell(cell) {
    this.celltxt = [];
    for (var i = 0; i < cell; i++) {
     // this.celltxt.push(<Cell key={i} />);
     this.celltxt.push(this.demo());
    }
    return (this.celltxt);
  }

  render() {
    return (
      // the num 9 should be replace by a variable
      <tr>
        {this.callCell(9)}
      </tr>
    )
  };
}
*/
