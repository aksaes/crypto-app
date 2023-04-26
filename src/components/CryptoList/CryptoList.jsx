import React from 'react'

const CryptoList = ({ data }) => {

  return (
    <ul style={{textAlign: 'center', listStylePosition: 'inside'}}>
      { data.map((item) => <li key={item.symbol}>{item.symbol}</li>) }
    </ul>
  )
}

export default CryptoList
