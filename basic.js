function getrandom(num , mul) 
    {
       var value = [ ]  
        for(i=0;i<=num;i++)
       {
         rand = Math.random() * mul;
        value.push(rand);
       }
        return value;
    }


var data=[
    {
      opacity:0.4,
        type: 'scatter3d',
      x: getrandom(50 , -75),
      y: getrandom(50 , -75),
      z: getrandom(50 , -75),
    },
       {
      opacity: 0.5,
        type: 'scatter3d',
      x: getrandom(50 , -75),
      y: getrandom(50 , 75),
      z: getrandom(50 , 75),
       
    },
    {
      opacity: 0.5,
        type: 'scatter3d',
      x: getrandom(50 , 100),
      y: getrandom(50 , 100),
      z: getrandom(50 , 100),
    }
];
var layout = {
  scene:{
      aspectmode: "manual", 
     aspectratio: { 
          x: 1, 
        y: 0.7,
          z: 1,
   }, 
    xaxis: {
    nticks: 9,
    range: [-200, 100],
  },
  yaxis: {
    nticks: 7,
    range: [-100, 100],
  },
  zaxis: {
    nticks: 10,
    range: [-150, 100],
  }},
   autosize: false,
  width: 550,
  height: 500,
  margin: {
    l: 0,
    r: 0,
    b: 50,
    t: 50,
    pad: 4
  },
};

Plotly.newPlot('myDiv', data, layout);