import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//table row cell mock split draw
class Mocking extends React.Component {
  constructor() {
    this.dataInfo = {col:4,row:5};//[0]for col,[1] for row]
  }
  render(){
    return(this.dataInfo);
  }
}
class DataEDIT extends React.Component {
  constructor(props)
  {
    super(props);
    this.num = Math.floor(Math.random() * 10000000);
    this.str = this.num.toString();
    this.len = this.str.length;
  }
  splitData()
  {
    var comma = 0;
    for (var i = this.len; i > 0; i--)
    {
      if (comma != 0 && comma != this.len && comma % 3 == 0)
          this.str = [this.str.substr(0,i),this.str.substr(i)].join(",");
      comma +=1 ;
    }
    return(this.str);
  }
  render()
  {
    return(this.splitData());
  }
}

class Cell extends React.Component {
  constructor(props)
  {
    super(props);
    this.cell = {"text-align":"right","border": "1px solid red"};
  }
  render()
  {
    return(
        <td style = {this.cell}>
          <DataEDIT/>
        </td>
    );
  }
}

class Row extends React.Component {
  constructor(props)
  {
    super(props);
    this.celltxt = [];
  }

  callCell(cell)
  {
    this.celltxt = [];
    for(var i = 0;i < cell; i++)
    {
      this.celltxt.push(<Cell/>);
    }
    return(this.celltxt);
  }

  render()
  {
    return(
      // the num 9 should be replace by a variable
      <tr>
        {this.callCell(9)}
      </tr>
    )
  };
}

class Table extends React.Component {
  constructor(props)
  {
    super(props);
    this.rowtxt = [];
  }

  callrow(row)
  {
    for(var i = 0;i < row; i++)
    {
      this.rowtxt.push(<Row/>);
    }
    return(this.rowtxt);
  }

  render()
  {
    // the num 9 should be replace by a variable
    return(
      <table>
        {this.callrow(9)}
      </table>
    )
  };
}

ReactDOM.render(
  <Table/>,
  document.body
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
