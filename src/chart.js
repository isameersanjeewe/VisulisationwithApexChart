import React, { Component } from "react";
import Chart from "react-apexcharts";
import moment from "moment";

class Achart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "bar-chart",
          toolbar: {
            show: true,
            offsetY: -14
          },
          zoom: {
            enabled: false
          }
        },
        colors: ["#fa6340", "#5e72e4"],
        plotOptions: {
          bar: {
            horizontal: false,
            dataLabels: {
              position: "center",
              maxItems: 100,
              hideOverflowingLabels: true,
              orientation: "vertical"
            }
          }
        },
        fill: {
          colors: ["#fa6340", "#5e72e4"],
          opacity: 1
        },
        xaxis: {
          type: "datetime",
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          labels: {
            rotateAlways: true,
            style: {
              colors: "#000000"
            },
            formatter: val => {
              return moment(new Date(val)).format("HH:mm");
            }
          },
          title: {
            text: "Last 24 days",
            offsetY: 0,
            style: {
              fontSize: "16px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600
            }
          },
          axisBorder: {
            show: true,
            height: 0.2,
            color: "#000000"
          },
          axisTicks: {
            show: false
          }
        },

        yaxis: {
          axisBorder: {
            show: true,
            width: 0.5,
            color: "#000000"
          },
          axisTicks: {
            show: true,
            color: "#333333"
          },
          labels: {
            style: {
              colors: "#000000"
            }
          },
          title: {
            text: "kWh",
            style: {
              color: "#333",
              fontSize: "16px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-title"
            }
          }
        },
        grid: {
          show: true,
          borderColor: "#efefef",
          xaxis: {
            lines: {
              show: true
            }
          }
        },
        tooltip: {
          theme: "dark",
          fillSeriesColor: false,
          marker: {
            show: true
          },
          x: {
            formatter: val => {
              return moment(new Date(val)).format("DD MMMM YYYY - HH:mm");
            }
          }
        },
        legend: {
          show: true,
          position: "top",
          labels: {
            useSeriesColors: true
          }
        }
      },
      series: [
        {
          name: "electricalEnergyHP",
          data: [
            ["2020-07-28T11:27:31.000Z", 61.86],
            ["2020-07-28T11:28:51.000Z", 59.52],
            ["2020-07-28T11:30:11.000Z", 61.61],
            ["2020-07-28T11:31:31.000Z", 58.56],
            ["2020-07-28T11:32:51.000Z", 60.09]
          ]
        },
        {
          name: "electricalEnergyAUXH",
          data: [
            ["2020-07-28T11:27:31.000Z", 80.73],
            ["2020-07-28T11:28:51.000Z", 79.44],
            ["2020-07-28T11:30:11.000Z", 78.37],
            ["2020-07-28T11:31:31.000Z", 78.34],
            ["2020-07-28T11:32:51.000Z", 79.27]
          ]
        }
      ]
    };
  }
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Achart;
