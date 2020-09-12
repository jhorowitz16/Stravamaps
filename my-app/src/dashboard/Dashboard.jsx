import React, { Component } from "react";
import { Chart } from "react-google-charts";

const SAMPLE_RESPONSE = {
  all_ride_totals: {
    count: 77,
    distance: 832530,
    elapsed_time: 193182,
    elevation_gain: 2444,
    moving_time: 166462,
  },
  all_run_totals: {
    count: 204,
    distance: 1111742,
    elapsed_time: 404317,
    elevation_gain: 4547,
    moving_time: 392026,
  },
};
const HEADER_ROW = ["", "Ride Totals", "Run Totals"];

function buildDataArray(response) {
  const { all_run_totals, all_ride_totals } = response;
  if (!all_run_totals || !all_run_totals) {
    return [HEADER_ROW];
  }
  const keys = [
    "count",
    "distance",
    "elapsed_time",
    "elevation_gain",
    "moving_time",
  ];
  const dataRows = keys.map((key) => [
    key,
    all_ride_totals[key],
    all_run_totals[key],
  ]);
  return [HEADER_ROW].concat(dataRows);
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartDataRows: [],
    };
  }

  componentDidMount() {
    this.props.statistics.then((statistics) => {
      this.setState({ chartDataRows: statistics });
    });
  }

  renderChart() {
    return (
      <Chart
        width={600}
        height={300}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={buildDataArray(this.state.chartDataRows)}
        options={{
          title: "Lifetime Strava Activity Breakdown",
          chartArea: { width: "50%" },
          hAxis: {
            title: "Statistics",
            minValue: 0,
          },
          vAxis: {
            title: "",
          },
        }}
        legendToggle
      />
    );
  }

  render() {
    return (
      <div className="display">
        <div style={{ display: "flex", maxWidth: 900 }}>
          {this.renderChart()}
        </div>
      </div>
    );
  }
}

export default Dashboard;
