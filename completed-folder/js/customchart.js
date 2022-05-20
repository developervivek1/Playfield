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

$(document).ready(function () {
  $('.chart.doughnut').each(function () {
    type: 'doughnut';
    var chartID = $(this).find('canvas').attr('id');
    var c = document.getElementById(chartID);
    var width = $('#' + chartID).width();

    var height = width;
    var linewidth = width / 8;
    c.setAttribute('width', width * 2);
    c.setAttribute('height', height * 2);
    var ctx = c.getContext('2d');
    var startingPoint = -0.5;
    ctx.scale(2, 2);
    ctx.beginPath();
    ctx.arc(height / 2, height / 2, width / 3, 0 * Math.PI, 1 * Math.PI);
    ctx.lineWidth = linewidth;
    ctx.strokeStyle = 'none';
    // ctx.shadowOffsetX = 3;
    // ctx.shadowOffsetY = 3;
    ctx.shadowBlur = 20;

    ctx.shadowColor = 'rgba(0,0,0,0.1)';
    ctx.stroke();

    var options = {
      animation: true,
      showTooltips: true,
      tooltipFillColor: 'rgba(255,255,255,0.7)',
      tooltipFontColor: '#000',
      tooltipEvents: ['mousemove', 'touchstart', 'touchmove'],
      multiTooltipTemplate: '<%= datasetLabel %>$<%= value %>',
      onAnimationComplete: function () {
        this.showTooltip(this.segments, true);
      },

      tooltipEvents: [],
    };

    $(this)
      .find('li')
      .each(function () {
        var start = startingPoint;
        var dataValue = $(this).find('data').attr('value');
        var end = startingPoint + 2.5 * dataValue;
        var color = $(this).find('data').data('color');
        ctx.beginPath();
        ctx.arc(
          height / 2,
          height / 2,
          width / 3,
          startingPoint * Math.PI,
          end * Math.PI
        );
        ctx.lineWidth = linewidth;
        ctx.strokeStyle = color;
        ctx.stroke();
        $(this).css('color', color);
      });
  });
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
    };
    var geochart = new google.visualization.GeoChart(
      document.getElementById('visualization')
    );
    geochart.draw(data, opts);
  }