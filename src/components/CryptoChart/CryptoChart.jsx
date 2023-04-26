import React from 'react'
import { Chart } from 'react-google-charts'

const CryptoChart = ({ data }) => {
  const chartData = [['Symbol', 'Trading Count']]

  data.forEach((item) => {
    chartData.push([item.symbol, item.count])
  })

  const options = {
    title: 'Transaction Count',
    hAxis: {
      title: 'Symbol',
    },
    vAxis: {
      title: 'Count',
    }
  }

  return (
    <div>
      <Chart
        width={'100%'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={options}
      />
    </div>
  )
}

export default CryptoChart
