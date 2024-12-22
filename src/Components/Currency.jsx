import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Currency() {
 
  const [amount,setAmount] = useState(0);
  const [fromCurrency, setfromCurrency] = useState("AZN");
  const [toCurrency ,  settoCurrency] = useState("USD");
  const [result , setresult] = useState(0);
  const Base_Url = "https://v6.exchangerate-api.com/v6/ce575dd4bee43f51780d4bdc/latest/"
const exchange = async()=>{
  const response = await axios.get(`${Base_Url}${fromCurrency}`)
  response.data.conversion_rates
 
}

  return (
    <div>
      <input value={amount} onChange={(e)=>{ setAmount(e.target.value)
      }} type="number" />
    
                            <select onChange={(e)=>{ setfromCurrency(e.target.value)}} id = "firstCurrency">
                                                    <option selected>AZN</option>
                                                    <option>USD</option>
                                                    <option>EUR</option>
                                                    <option>JPY</option>
                                                    <option>BGN</option>
                                                    <option>CZK</option>
                                                    <option>DKK</option>
                                                    <option>GBP</option>          
                                                    <option>HUF</option>
                                                    <option>PLN</option>
                                                    <option>RON</option>
                                                    <option>SEK</option>
                                                    <option>CHF</option>
                                                    <option>ISK</option>
                                                    <option>NOK</option>          
                                                    <option>HRK</option>
                                                    <option>RUB</option>
                                                    <option>TRY</option>
                                                    <option>AUD</option>
                                                    <option>BRL</option>          
                                                    <option>CAD</option>
                                                    <option>CNY</option>
                                                    <option>HKD</option>
                                                    <option>IDR</option>          
                                                    <option>ILS</option>
                                                    <option>INR</option>
                                                    <option>KRW</option>
                                                    <option>MXN</option>          
                                                    <option>MYR</option>
                                                    <option>NZD</option>
                                                    <option>PHP</option>
                                                    <option>SGD</option>
                                                    <option>THB</option>          
                                                    <option>ZAR</option>
                                                </select>

                              <select onChange={(e)=>{settoCurrency(e.target.value)}} id = "secondCurrency">
                                                <option selected>USD</option>
                                                    <option>TRY</option>
                                                    <option>EUR</option>
                                                    <option>JPY</option>
                                                    <option>BGN</option>
                                                    <option>CZK</option>
                                                    <option>DKK</option>
                                                    <option>GBP</option>          
                                                    <option>HUF</option>
                                                    <option>PLN</option>
                                                    <option>RON</option>
                                                    <option>SEK</option>
                                                    <option>CHF</option>
                                                    <option>ISK</option>
                                                    <option>NOK</option>          
                                                    <option>HRK</option>
                                                    <option>RUB</option>
                                                    <option>AUD</option>
                                                    <option>BRL</option>          
                                                    <option>CAD</option>
                                                    <option>CNY</option>
                                                    <option>HKD</option>
                                                    <option>IDR</option>          
                                                    <option>ILS</option>
                                                    <option>INR</option>
                                                    <option>KRW</option>
                                                    <option>MXN</option>          
                                                    <option>MYR</option>
                                                    <option>NZD</option>
                                                    <option>PHP</option>
                                                    <option>SGD</option>
                                                    <option>THB</option>          
                                                    <option>ZAR</option>
                                                </select>
                                                
     <input value={result} onChange={(e)=>{setresult(e.target.value)}} type="number" />
     <button onClick={exchange}> Cevir</button>

    </div>
  )
}

export default Currency
