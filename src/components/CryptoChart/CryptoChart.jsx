import React from 'react'
import { Chart } from 'react-google-charts'
import ClipLoader from "react-spinners/ClipLoader"

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
        loader={<ClipLoader 
          size={30}
          cssOverride={{
            display: "block",
            margin: "0 auto"
          }}
        />}
        data={chartData}
        options={options}
      />
    </div>
  )
}

export default CryptoChart
