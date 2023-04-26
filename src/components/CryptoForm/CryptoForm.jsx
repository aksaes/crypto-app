import React, { useState } from 'react'

const CryptoForm = ({ data, onSubmit }) => {
  const [symbol, setSymbol] = useState('')

  const handleSubmit = async (event) => {
    // Prevent page refresh
    event.preventDefault()

    const symbolExists = data && data.some(item => item.symbol === symbol)

    // Avoid network call if symbol exists already
    if(symbolExists) {
      alert('Symbol already exists in chart.')
    }
    else {
      try {
        const response = await fetch(`https://data.binance.com/api/v3/ticker/24hr?symbol=${symbol}`)
        const responseData = await response.json()
        onSubmit(responseData)
      }
      catch(error) {
        alert('Something went wrong. Please verify the symbol entered. Otherwise, try again.')
      }
    }

    setSymbol('')
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <form onSubmit={handleSubmit}>
        <label style={{marginRight: '10px'}}>
          Enter crypto symbol to add: 
          <input
            type="text"
            value={symbol}
            style={{marginLeft: '10px'}}
            onChange={(event) => setSymbol(event.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default CryptoForm
