// barchartjs
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',

  data: {
    labels: [
      'Football',
      'Hockey',
      'Badminton',
      'Kabbadi',
      'Chess',
      'Others',
    ],
    datasets: [
      {
        label: 'Blue',
        data: [150, 250, 300, 300, 300, 300],
        // backgroundColor: '#05A6F0',
        backgroundColor: [
          '#05A6F0',
          '#05A6F0',
          '#05A6F0',
          '#F47122',
          '#05A6F0',
          '#05A6F0',
        ],
      },
      {
        label: 'LightBlue',
        data: [350, 250, 200, 200, 200, 200, 100],
        // backgroundColor: '#E5F6FE',
        backgroundColor: [
          '#E5F6FE',
          '#E5F6FE',
          '#E5F6FE',
          '#FFBB59',
          '#E5F6FE',
          '#E5F6FE',
        ],
      },
    ],
  },

  options: {
    barPercentage: 0.3,

    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Example',
        font: {
          size: 14,
        },
      },

      afterDraw: chart => {
        var ctx = chart.chart.ctx;
        var xAxis = chart.scales['x-axis-0'];
        var yAxis = chart.scales['y-axis-0'];
        xAxis.ticks.forEach((value, index) => {
          var x = xAxis.getPixelForTick(index);
          var image = new Image();
          (image.src = images[index]),
            ctx.drawImage(image, x - 12, yAxis.bottom + 10);
        });
      },
    },

    responsive: true,
    scales: {
      y: {
        stacked: true,
        ticks: {
          min: 0,

          stepSize: 100,
          max: 500,
          drawTicks: false,
          tickMarkLength: 0,
        },

        grid: {
          tickColor: 'white',
          borderColor: 'white',
        },
      },
      x: {
        stacked: true,
        grid: {
          lineWidth: 0,
          tickMarkLength: 0,
          drawTicks: false,
          borderColor: 'white',
        },
        tickMarkLength: 0,
      },
    },
  },
});

// doughnut chart

const ctx3 = document.getElementById('myChart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue', 'Yellow',],
    datasets: [{
      label: '# of Votes',
      data: [30, 70, 30, 20, 10, 25,],
      backgroundColor: [
        '#F47122',
        '#05A6F0',
        '#FFCB41',
        '#593FE7',
        '#A3A0FB',
        '#FFBB59',

      ],
      borderColor: [
        '#F47122',
        '#05A6F0',
        '#FFCB41',
        '#593FE7',
        '#A3A0FB',
        '#FFBB59',

      ],
      borderWidth: 1,
      cutout: '70%',

    }]
  },
  options: {
    maintainAspectRatio: false,

    plugins: {


      legend: {
        display: false
      },
      label: {
        render: 'label',
        precision: 1,
        arc: true,
        position: 'outside',
      },
      title: {
        display: false,
        text: 'Example',
        font: {
          size: 14
        }
      },
    },

    responsive: true,

    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Volunteer Hours',
        },
        gridLines: {
          display: false,
        },
      }],

      yAxes: [{
        gridLines: {
          display: false,

        }
      }]

    }
  }
});


// geo chart

  google.load('visualization', '1', { packages: ['geochart'] });
  google.setOnLoadCallback(drawVisualization);

  function drawVisualization() {
    var data = google.visualization.arrayToDataTable([
      ['State', 'Population'],
      ['Uttar Pradesh', 511307034],
      ['Maharashtra', 112372972],
      ['Bihar', 103804637],
      ['West Bengal', 91347736],
      ['Madhya Pradesh', 72597565],
      ['Tamil Nadu', 72138958],
      ['Rajasthan', 611307034],
      ['Karnataka', 611307040],
      ['Gujarat', 60383628],
      ['Andhra Pradesh', 49386799],
      ['Odisha', 41947358],
      ['Telangana', 35286757],
      ['Kerala', 33387677],
      ['Jharkhand', 32966238],
      ['Assam', 31169272],
      ['Punjab', 611307010],
      ['Chhattisgarh', 25540196],
      ['Haryana', 25353081],
      ['Jammu and Kashmir', 411307034],
      ['Uttarakhand', 10116752],
      ['Himachal Pradesh', 6856509],
      ['Tripura', 3671032],
      ['Meghalaya', 2964007],
      ['Manipur', 2721756],
      ['Nagaland', 1980602],
      ['Goa', 1457723],
      ['Arunachal Pradesh', 1382611],
      ['Mizoram', 1091014],
      ['Sikkim', 607688],
      ['Delhi', 16753235],
      ['Puducherry', 1244464],
      ['Chandigarh', 1054686],
      ['Andaman and Nicobar Islands', 379944],
      ['Dadra and Nagar Haveli', 342853],
      ['Daman and Diu', 242911],
      ['Lakshadweep', 64429],
    ]);

    var opts = {
      region: 'IN',
      displayMode: 'regions',
      resolution: 'provinces',
      backgroundColor: '#ECF6FF',
      datalessRegionColor: '#ECF6FF',
      defaultColor: '#ECF6FF',
      colorAxis: { colors: ['#C4CFE8', '#A1B4DA', '#5B7CBE', '#083A9C'] },
      magnifyingGlass: { enable: true, zoomFactor: 17.5 },
      enableRegionInteractivity: 'true',
      domain: 'IN',
      responsive: true,
      height:328,
    };
    var geochart = new google.visualization.GeoChart(
      document.getElementById('visualization')
    );
    geochart.draw(data, opts);
  }