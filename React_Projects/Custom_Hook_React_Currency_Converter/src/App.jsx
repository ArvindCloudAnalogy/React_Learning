import React, { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/UseCurrencyHooks'

const App = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    const numericAmount = Number(amount) || 0;
    const rate = Number(currencyInfo[to]) || 0;
    setConvertedAmount(numericAmount * rate)
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const BackgroundImage = 'https://static.vecteezy.com/system/resources/previews/040/959/652/non_2x/currency-exchange-concept-with-graph-chart-and-dollar-coin-forex-trading-financial-markets-and-global-economy-design-background-illustration-vector.jpg'

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url('${BackgroundImage}')` }}
    >
    
      <div className="absolute inset-0 bg-blue-900/70 "></div>

 
      <div className="relative z-10 w-full max-w-md mx-auto p-6">
        <div className="rounded-3xl p-6 shadow-2xl border-black border-3 rounded-2xl bg-white/70 backdrop-blur-xl">

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >

<div className=" relative">
  <h1 className='text-center text-xl font-bold mb-4 '>Currency Converter</h1>
  <div className="mt-6 border-black border-3 rounded-2xl ">

    <InputBox
    label="From"
    amount={amount}
    currencyOptions={options}
    onCurrencyChange={(currency) => setFrom(currency)}
    selectCurrency={from}
    onAmountChange={(amount) => setAmount(amount)}
    onFocusAmount={() => { if (amount === 0) setAmount(''); }}
  />
</div>



  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
    <button
      type="button"
      onClick={swap}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-xl border-4  border-black transition-all duration-200 hover:scale-110"
    >
      ⇅
    </button>
  </div>

  <div className="mt-6 border-black border-3 rounded-2xl ">
    <InputBox
      label="To"
      amount={convertedAmount}
      currencyOptions={options}
      onCurrencyChange={(currency) => setTo(currency)}
      selectCurrency={to}
      amountDisable
    />
  </div>

</div>
           
            <button
              type="submit"
              className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold px-4 py-3 rounded-xl shadow-lg transition-all duration-300 border-black border-3 rounded-2xl"
            >
              Convert {from.toUpperCase()} → {to.toUpperCase()}
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default App