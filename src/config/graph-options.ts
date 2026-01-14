export const graphOptions = {
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
        drawTicks: false,
      },
      border: {
        display: false,
      },
      ticks: {
        color: '#9ca3af',
        font: { size: 11 },
      },
    },
    yTemp: {
      display: false,
    
    },
    yWind: {
      display: false,
    },
    yHumidity: {
      display: false,
    },
  },
  plugins: {
    tooltip: {
      mode: 'index' as const,
      intersect: false,
    },
  },
};