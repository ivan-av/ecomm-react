import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import './style/purchases.css'


const PurchasesScreen = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getConfig())
      .then(res => setPurchases(res.data.data.purchases))
      .catch(err => console.log(err))
  }, [])

  console.log(purchases)

  return (
    <div className='purchases__container'>
      <h2 className='purchases__title'><i class="fa-solid fa-store"></i> PURCHASES</h2>
    </div>
  )
}

export default PurchasesScreen