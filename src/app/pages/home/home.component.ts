import {AfterViewInit, Component} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels, ApexFill, ApexGrid, ApexLegend,
  ApexPlotOptions, ApexResponsive, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis,
  NgApexchartsModule
} from "ng-apexcharts";
import {FooterComponent} from "../../components/organism/footer/footer.component";
import {HorizontalNavComponent} from "../../components/organism/horizontal-nav/horizontal-nav.component";

export type ChartBaseOptions = {
  chart: ApexChart,
  plotOptions: ApexPlotOptions,
  colors: string[],
  stroke: ApexStroke,
};
export type ChartMainOption = {
  series: ApexAxisChartSeries,
  xaxis: ApexXAxis,
  yaxis: ApexYAxis,
  fill: ApexFill,
  grid: ApexGrid,
  dataLabels: ApexDataLabels,
  tooltip: ApexTooltip,
} & ChartBaseOptions
export type ChartCircleOption = {
  series: number[],
  legend: ApexLegend,
  labels: string[],
} & ChartBaseOptions
export type ChartDeviceOption = {
  responsive: ApexResponsive[],
  dataLabels: ApexDataLabels,
  tooltip: ApexTooltip,
} & ChartCircleOption
// export type ChartTrafficSourceOption =  {
//   track: ApexT
// } & ChartCircleOption

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgApexchartsModule,
    FooterComponent,
    HorizontalNavComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  title = 'Metrica2';
  // @ViewChild(ChartComponent) chart!: ChartComponent;
  chartMain!: ChartMainOption;
  chartDevice!: ChartDeviceOption;
  circleChart!: ChartCircleOption;

  constructor() {
    this.initChartMain();
    this.initDeviceChart();
    this.initCircleChart();
    // console.log(this.chart)
  }

  ngAfterViewInit() {

    let iteration = 11

    function getRangeRandom(yrange: { max: number, min: number }) {
      return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    }

    setInterval(() => {

      iteration++;

      this.circleChart.series = [getRangeRandom({min: 10, max: 100}), getRangeRandom({min: 10, max: 100})]


    }, 3000)
  }

  initChartMain() {
    this.chartMain = {
      series: [{
        name: 'New Visitors',
        data: [68, 44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Unique Visitors',
        data: [51, 76, 85, 101, 98, 87, 105, 91, 114, 94]
      },],
      chart: {
        height: 330,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
          borderRadius: 10,
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      colors: ["#1ccab8", '#2a76f4'],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        axisBorder: {
          show: true,
          color: '#bec7e0',
        },
        axisTicks: {
          show: true,
          color: '#bec7e0',
        },
      },
      yaxis: {
        title: {
          text: 'Visitors',
        },
      },
      fill: {
        opacity: 1,
      },
      // legend: {
      //     floating: true
      // },
      grid: {
        row: {
          colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.2,
        },
        strokeDashArray: 2.5,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "" + val + "k"
          }
        }
      }
    };
  }

  initDeviceChart() {
    this.chartDevice = {
      chart: {
        height: 255,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          donut: {
            size: '85%'
          }
        }
      },
      dataLabels: {
        enabled: false,
      },

      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },

      series: [50, 25, 25],
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        // verticalAlign: 'middle',
        floating: false,
        fontSize: '13px',
        offsetX: 0,
        offsetY: 0,
      },
      labels: ["Mobile", "Tablet", "Desktop"],
      colors: ["#2a76f4", "rgba(42, 118, 244, .5)", "rgba(42, 118, 244, .18)"],

      responsive: [{
        breakpoint: 600,
        options: {
          plotOptions: {
            donut: {
              customScale: 0.2
            }
          },
          chart: {
            height: 240
          },
          legend: {
            show: false
          },
        }
      }],
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " %"
          }
        }
      }

    }
  }

  initCircleChart() {
    this.circleChart = {
      chart: {
        type: 'radialBar',
        height: 295,
        offsetY: -30,
        offsetX: 20
      },
      plotOptions: {
        radialBar: {
          inverseOrder: true,
          hollow: {
            margin: 5,
            size: '55%',
            background: 'transparent',
          },
          track: {
            show: true,
            background: '#ddd',
            strokeWidth: '10%',
            opacity: 1,
            margin: 5, // margin is in pixels
          },

          dataLabels: {
            name: {
              fontSize: '18px',
            },
            value: {
              fontSize: '16px',
              color: '#50649c',
            },

          }
        },
      },
      series: [71, 63],
      labels: ['Domestic', 'International'],
      legend: {
        show: true,
        position: 'bottom',
        offsetX: -40,
        offsetY: -5,
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex] + '%'
        }
      },

      stroke: {
        lineCap: 'round'
      },
      colors: ["#2a76f4", "#38c4fa"],
    }
  }
}
