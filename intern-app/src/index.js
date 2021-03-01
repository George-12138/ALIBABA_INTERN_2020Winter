import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class MockingData extends React.Component {
  constructor(props)
  {
    super(props);
    this.rdm = Math.floor(Math.random() * 10000000000);
    this.str = this.rdm.toString();
    this.len =  this.str.length;
    this.text = [];
  }

  splitData()
  {
    var comma = 0;
    for (var i = this.len; i > 0; i--)
    {
      if (comma == 0 || comma == this.len) {
      }
      else {
        if (comma % 3 == 0) {
          this.str = [this.str.substr(0,i),this.str.substr(i)].join(',');
        }
      }
      comma++;
    }
    return(this.str);
  }

  render()
  {
    return(
      this.str +"\n"+
      this.splitData()
    );
  }
}

class SplitFunc extends React.Component {
  constructor(props)
  {
    super(props);
    this.temp = 0;
    this.tempMod = 0;
    this.text = "";
    this.demodata = 1234312567;
  }

  splithelperfunc(cellVal)
  {
    this.temp = cellVal;
    this.text = (cellVal % 1000) == 0 ? "000" : (cellVal % 1000);
    if (cellVal > 999)
    {
      this.temp /= 1000;
      while (this.temp > 999)
      {
        this.tempMod = this.temp % 1000;
        this.temp /= 1000;
        if (Math.floor(this.tempMod) == 0) {
          this.text = "000" + "," + this.text;
        }
        else {
          this.text = Math.floor(this.tempMod) + "," + this.text;
        }
      }
      this.text = Math.floor(this.temp) + "," + this.text;
    }
    return (this.text);
  }

  render()
  {
    return(
      this.splithelperfunc(this.demodata)
    );
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
          <MockingData/>
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
    return( this.rowtxt );
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
