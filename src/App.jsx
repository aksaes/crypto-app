import React, { useState } from 'react'
import CryptoForm from './components/CryptoForm/CryptoForm'
import CryptoList from './components/CryptoList/CryptoList'
import CryptoChart from './components/CryptoChart/CryptoChart'

const App = () => {

  const [cryptoData, setCryptoData] = useState([])

  const handleFormSubmit = (responseData) => {

    setCryptoData([...cryptoData, {
      symbol: responseData.symbol,
      count: responseData.count
    }])
  }

  return (
    <div>
      <div style={{textAlign: 'center'}}>
        <h1>Cyrpto Data</h1>
      </div>
      <CryptoForm data ={cryptoData} onSubmit={handleFormSubmit} />
      { cryptoData.length > 0 && <CryptoList data={cryptoData} /> }
      { cryptoData.length > 0 && <CryptoChart data={cryptoData} /> }
    </div>
  )
}

export default App
