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

function buildDataArray(response) {
  const keys = [
    "count",
    "distance",
    "elapsed_time",
    "elevation_gain",
    "moving_time",
  ];
  const { all_run_totals, all_ride_totals } = response;
  const dataRows = keys.map((key) => [
    key,
    all_ride_totals[key],
    all_run_totals[key],
  ]);
  return [["", "Ride Totals", "Run Totals"]].concat(dataRows);
}

class Dashboard extends Component {
  render() {
    return (
      <div className="display">
        <div style={{ display: "flex", maxWidth: 900 }}>
          <Chart
            width={600}
            height={300}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={buildDataArray(SAMPLE_RESPONSE)}
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
        </div>
      </div>
    );
  }
}

export default Dashboard;
