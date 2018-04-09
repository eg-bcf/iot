import React, { Component } from 'react';
import './App.css';
import { LineChart,
         CartesianGrid,
         XAxis,
         YAxis,
         Tooltip,
         Legend,
         Line
       } from 'recharts';
import axios from 'axios';
/*
const data1 =
[ { sample_num: 0,
    liquid_ident_2: 416,
    liquid_ident_4: 484,
    liquid_ident_7: 515,
    liquid_ident_8: 543 },
  { sample_num: 1,
    liquid_ident_2: 379,
    liquid_ident_4: 417,
    liquid_ident_7: 420,
    liquid_ident_8: 397 },
  { sample_num: 2,
    liquid_ident_2: 379,
    liquid_ident_4: 416,
    liquid_ident_7: 419,
    liquid_ident_8: 397 },
  { sample_num: 3,
    liquid_ident_2: 380,
    liquid_ident_4: 416,
    liquid_ident_7: 419,
    liquid_ident_8: 397 },
  { sample_num: 4,
    liquid_ident_2: 380,
    liquid_ident_4: 417,
    liquid_ident_7: 420,
    liquid_ident_8: 397 },
  { sample_num: 5,
    liquid_ident_2: 380,
    liquid_ident_4: 416,
    liquid_ident_7: 419,
    liquid_ident_8: 397 },
  { sample_num: 6,
    liquid_ident_2: 380,
    liquid_ident_4: 416,
    liquid_ident_7: 419,
    liquid_ident_8: 397 },
  { sample_num: 7, liquid_ident_2: 380 },
  { sample_num: 8, liquid_ident_2: 380 },
  { sample_num: 9, liquid_ident_2: 380 },
  { sample_num: 10, liquid_ident_2: 380 },
  { sample_num: 11, liquid_ident_2: 380 },
  { sample_num: 12, liquid_ident_2: 380 },
  { sample_num: 13, liquid_ident_2: 381 },
  { sample_num: 14, liquid_ident_2: 423 },
  { sample_num: 15, liquid_ident_2: 380 },
  { sample_num: 16, liquid_ident_2: 381 },
  { sample_num: 17, liquid_ident_2: 382 },
  { sample_num: 18, liquid_ident_2: 382 },
  { sample_num: 19, liquid_ident_2: 381 },
  { sample_num: 20, liquid_ident_2: 382 } ]

var data = [
{id: 1, liquid_id: 2, test_id: 1, value: 416, created_at: "2018-03-30 14:21:20"},
{id: 2, liquid_id: 2, test_id: 1, value: 379, created_at: "2018-03-30 14:21:23"},
{id: 3, liquid_id: 2, test_id: 1, value: 379, created_at: "2018-03-30 14:21:25"},
{id: 4, liquid_id: 2, test_id: 1, value: 380, created_at: "2018-03-30 14:21:28"},
{id: 5, liquid_id: 2, test_id: 1, value: 380, created_at: "2018-03-30 14:21:30"},
{id: 6, liquid_id: 2, test_id: 1, value: 380, created_at: "2018-03-30 14:21:33"},
{id: 7, liquid_id: 2, test_id: 1, value: 380, created_at: "2018-03-30 14:21:35"},
{id: 8, liquid_id: 2, test_id: 1, value: 380, created_at: "2018-03-30 14:21:38"},
{id: 9, liquid_id: 2, test_id: 1, value: 380, created_at: "2018-03-30 14:21:40"},
{id: 10, liquid_id: 2, test_id: 1, value: 380, created_at: "2018-03-30 14:21:43"},
{id: 11, liquid_id: 2, test_id: 1, value: 380, created_at: "2018-03-30 14:21:45"},
{id: 12, liquid_id: 2, test_id: 1, value: 380, created_at: "2018-03-30 14:21:48"},
{id: 13, liquid_id: 2, test_id: 1, value: 380, created_at: "2018-03-30 14:21:50"},
{id: 14, liquid_id: 2, test_id: 1, value: 381, created_at: "2018-03-30 14:21:53"},
{id: 15, liquid_id: 2, test_id: 1, value: 423, created_at: "2018-03-30 14:25:14"},
{id: 16, liquid_id: 4, test_id: 1, value: 484, created_at: "2018-03-30 14:25:14"},
{id: 17, liquid_id: 7, test_id: 1, value: 515, created_at: "2018-03-30 14:25:14"},
{id: 18, liquid_id: 8, test_id: 1, value: 543, created_at: "2018-03-30 14:25:14"},
{id: 19, liquid_id: 2, test_id: 1, value: 380, created_at: "2018-03-30 14:25:17"},
{id: 20, liquid_id: 4, test_id: 1, value: 417, created_at: "2018-03-30 14:25:17"},
{id: 21, liquid_id: 7, test_id: 1, value: 420, created_at: "2018-03-30 14:25:17"},
{id: 22, liquid_id: 8, test_id: 1, value: 397, created_at: "2018-03-30 14:25:17"},
{id: 23, liquid_id: 2, test_id: 1, value: 381, created_at: "2018-03-30 14:25:20"},
{id: 24, liquid_id: 4, test_id: 1, value: 416, created_at: "2018-03-30 14:25:20"},
{id: 25, liquid_id: 7, test_id: 1, value: 419, created_at: "2018-03-30 14:25:20"},
{id: 26, liquid_id: 8, test_id: 1, value: 397, created_at: "2018-03-30 14:25:20"},
{id: 27, liquid_id: 2, test_id: 1, value: 382, created_at: "2018-03-30 14:25:22"},
{id: 28, liquid_id: 4, test_id: 1, value: 416, created_at: "2018-03-30 14:25:22"},
{id: 29, liquid_id: 7, test_id: 1, value: 419, created_at: "2018-03-30 14:25:22"},
{id: 30, liquid_id: 8, test_id: 1, value: 397, created_at: "2018-03-30 14:25:22"},
{id: 31, liquid_id: 2, test_id: 1, value: 382, created_at: "2018-03-30 14:25:25"},
{id: 32, liquid_id: 4, test_id: 1, value: 417, created_at: "2018-03-30 14:25:25"},
{id: 33, liquid_id: 7, test_id: 1, value: 420, created_at: "2018-03-30 14:25:25"},
{id: 34, liquid_id: 8, test_id: 1, value: 397, created_at: "2018-03-30 14:25:25"},
{id: 35, liquid_id: 2, test_id: 1, value: 381, created_at: "2018-03-30 14:25:27"},
{id: 36, liquid_id: 4, test_id: 1, value: 416, created_at: "2018-03-30 14:25:27"},
{id: 37, liquid_id: 7, test_id: 1, value: 419, created_at: "2018-03-30 14:25:27"},
{id: 38, liquid_id: 8, test_id: 1, value: 397, created_at: "2018-03-30 14:25:27"},
{id: 39, liquid_id: 2, test_id: 1, value: 382, created_at: "2018-03-30 14:25:30"},
{id: 40, liquid_id: 4, test_id: 1, value: 416, created_at: "2018-03-30 14:25:30"},
{id: 41, liquid_id: 7, test_id: 1, value: 419, created_at: "2018-03-30 14:25:30"},
{id: 42, liquid_id: 8, test_id: 1, value: 397, created_at: "2018-03-30 14:25:30"}]

function grouping(list, value) {
  return list.filter(x => x.liquid_id == value)
}

function getUniqueKeys(list) {
  var acc = []
  list.map( x => {
    if (acc.includes(x.liquid_id)) {

    } else {
      acc.push(x.liquid_id)
    }
  })
  return acc
}

function addSampleNum(list) {
  for(var i = 0, len = list.length; i < len; i++) {
    list[i]['sample_num'] = i;
  }
  return list;
}


var singles = grouping(data, 2);
var singlesOrdered = addSampleNum(singles);
console.log(singlesOrdered);
//var arrKeys = getUniqueKeys(data)
//var sortedList = arrKeys.map( y => grouping(data, y))
*/

function grouping(list, value) {
  return Promise.resolve(list.filter(x => x.liquid_id === value))
}

function getUniqueKeys(list) {
  var acc = []
  list.map( x => {
    if (acc.includes(x.liquid_id)) {

    } else {
      acc.push(x.liquid_id)
    }
  })
  return Promise.resolve(acc)
}

function addSampleNum(list) {
  return Promise.all(list.map( x =>
    Promise.all(x.map(function(key, value) {
      key["sample_num"] = value
      key["liquid_ident"] = "liquid_ident_" + key["liquid_id"].toString()
      return key
    }))))
}

function groupBySampleNum(list) {
  var acc = 0
  var dataArr = []
  list.map(
    function(x) {
      x.map(function(y) {
      if( y["sample_num"] >= acc ) {
          var obj = {}
          obj["sample_num"] = y["sample_num"]
          obj[y["liquid_ident"]] = y["value"]
          Promise.resolve(dataArr.push(obj))
          acc += 1
      }
      else {
        //console.log(dataArr)
        Promise.resolve(dataArr[y["sample_num"]][y["liquid_ident"]] = y["value"])
      }
      })
    })
  return Promise.all(dataArr)
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  fetchDataFromServer() {
    axios.get('/leak_test')
      .then(result => //console.log(result.data)
      getUniqueKeys(result.data)
        .then(x =>
          Promise.all(x)
            .then( y =>
              y.map( z => grouping(result.data, z)))
                .then(a => Promise.all(a)
                  .then( b => addSampleNum(b))
                    .then(c => Promise.all(c)
                      .then(d => Promise.all(d)
                        .then( e => groupBySampleNum(e)
                          //.then(f => console.log(f))))))))
                          .then(f => this.setState({ data: f }))))))))
  }

  componentDidMount() {
    this.fetchDataFromServer();
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
      if(this.state.data.length !== 0) {
        <LineChart width={1000} height={500} data={ this.state.data }
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sample_num" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="liquid_ident_2" stroke="#8884d8" />
          <Line type="monotone" dataKey="liquid_ident_4" stroke="#82ca9d" />
          <Line type="monotone" dataKey="liquid_ident_7" stroke="#8884d8" />
          <Line type="monotone" dataKey="liquid_ident_8" stroke="#8884d8" />
        </LineChart>
    }
      </div>
    );
  }
}

export default App;
