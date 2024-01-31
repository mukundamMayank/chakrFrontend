import React from 'react';
import Plot from 'react-plotly.js';

const PlotPlot = ({ data, layout }) => {
  return <Plot data={data} layout={layout} />;
};

export default PlotPlot;
