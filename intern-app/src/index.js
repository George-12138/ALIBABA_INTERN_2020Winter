import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class MockingData extends React.Component {
  render(){
    var txt = 0;
    txt = Math.floor(Math.random() * 100000000);
    var demo = "demo"
    return( txt );
    //return( demo );
  }
}
/*
class SplitFunc extends React.Component {
  splithelperfunc(i)
  {
    return (i);
  }

  render(){
    return(
      {this.splithelperfunc(MockingData)}
    );
  }
}
*/
class Cell extends React.Component {
  render()
  {
    var cell = {"text-align":"right","border": "1px solid red"};
    return(
        <td style = {cell}>
          <MockingData/>
        </td>
    );
  }
}

class Row extends React.Component {

    callCell(cell)
    {
      var celltxt = [];
      for(var i = 0;i < cell; i++)
      {
        celltxt.push(<Cell/>);
      }
      return(celltxt);
    }
    render()
    {
      return(
        // the num 9 should be replace by a variable
        <tr>
          {this.callCell(9)}
        </tr>
      )
    }
}

class Table extends React.Component {
  callrow(row)
  {
    var rowtxt = [];
    for(var i = 0;i < row; i++)
    {
      rowtxt.push(<Row/>);
    }
    return( rowtxt );
  }
  render()
  {
    // the num 9 should be replace by a variable
    return(
      <table>
        {this.callrow(9)}
      </table>
    )
  }
}

ReactDOM.render(
  <Table/>,
  document.body
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
