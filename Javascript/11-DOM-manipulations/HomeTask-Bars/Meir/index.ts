
//chart data
var chartjson = {
    "title": "Students Academic Scores",
    "data": [{
      "name": "Kerry",
      "score": 20
    }, {
      "name": "Teegan",
      "score": 73
    }, {
      "name": "Jamalia",
      "score": 20
    }, {
      "name": "Quincy",
      "score": 89
    }, {
      "name": "Darryl",
      "score": 24
    }, {
      "name": "Jescie",
      "score": 86
    }, {
      "name": "Quemby",
      "score": 96
    }, {
      "name": "McKenzie",
      "score": 71
    }],
    "xtitle": "Secured Marks",
    "ytitle": "Marks",
    "ymax": 100,
    "ykey": 'score',
    "xkey": "name",
    "prefix": "%"
  }
  
  //chart colors
  var colors = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen'];
  
  //constants
  var TROW = 'tr',
    TDATA = 'td';
  
  var chart = document.createElement('div');
  //create the chart canvas
  var barchart = document.createElement('table');
  //create the title row
  var titlerow = document.createElement(TROW);
  //create the title data
  var titledata = document.createElement(TDATA);
  //make the colspan to number of records
  titledata.setAttribute('colspan', chartjson.data.length + 1);
  titledata.setAttribute('class', 'charttitle');
  titledata.innerText = chartjson.title;
  titlerow.appendChild(titledata);
  barchart.appendChild(titlerow);
  chart.appendChild(barchart);
  
  //create the bar row
  var barrow = document.createElement(TROW);
  
  //lets add data to the chart
  for (var i = 0; i < chartjson.data.length; i++) {
    barrow.setAttribute('class', 'bars');
    var prefix = chartjson.prefix || '';
    //create the bar data
    var bardata = document.createElement(TDATA);
    var bar = document.createElement('div');
    bar.setAttribute('class', colors[i]);
    bar.style.height = chartjson.data[i][chartjson.ykey] + prefix;
    bardata.innerText = chartjson.data[i][chartjson.ykey] + prefix;
    bardata.appendChild(bar);
    barrow.appendChild(bardata);
  }
  
  //create legends
  var legendrow = document.createElement(TROW);
  var legend = document.createElement(TDATA);
  legend.setAttribute('class', 'legend');
  legend.setAttribute('colspan', chartjson.data.length);
  
  //add legend data
  for (var i = 0; i < chartjson.data.length; i++) {
    var legbox = document.createElement('span');
    legbox.setAttribute('class', 'legbox');
    var barname = document.createElement('span');
    barname.setAttribute('class', colors[i] + ' xaxisname');
    var bartext = document.createElement('span');
    bartext.innerText = chartjson.data[i][chartjson.xkey];
    legbox.appendChild(barname);
    legbox.appendChild(bartext);
    legend.appendChild(legbox);
  }
  barrow.appendChild(legend);
  barchart.appendChild(barrow);
  barchart.appendChild(legendrow);
  chart.appendChild(barchart);
  document.getElementById('chart').innerHTML = chart.outerHTML;