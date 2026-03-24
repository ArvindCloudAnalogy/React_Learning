import React, { useId } from 'react'

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onFocusAmount,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "inr",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) => {

    const amountInputId = useId()

    return (
        <div className={`bg-white border border-gray-200 shadow-sm p-4 rounded-xl flex justify-between items-center ${className}`}>
            
           
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-gray-500 font-bold text-sm">
                    {label}
                </label>

                <input
                    id={amountInputId}
                    type="number"
                    className="w-full mt-1 text-lg outline-none  bg-transparent"
                    placeholder="0"
                    disabled={amountDisable}
                    value={amount}
                    onFocus={onFocusAmount}
                    min="0"
                    onChange={(e) => {
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }}
                />
            </div>

            <div className="w-1/2 text-right">
                <p className="text-gray-500 text-sm mb-1 font-bold">Currency</p>

                <select
                    className="bg-gray-100 px-2 py-1 rounded-lg outline-noneborder-black border-3 rounded-2xl cursor-pointer"
                    value={selectCurrency}
                    onChange={(e) => {
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>

        </div>
    );
}

export default InputBox;