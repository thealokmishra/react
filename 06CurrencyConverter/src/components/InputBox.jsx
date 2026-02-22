import React, { useId } from "react";

// passing object as props to the component, with default values for some of the properties
function InputBox({
  label,
  amount,
  placeholder,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [], //array to hold all currency options
  selectCurrency = "usd", //default value so usd is already selected
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId(); //generates unique id using useId hook, used to atach to the input element to the label using htmlFor: makes it easier for accessibility like click to focus, screen readers

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5 text-lg font-medium text-zinc-800"
          type="number"
          placeholder={placeholder}
          disabled={amountDisable}
          // Change value to handle empty state gracefully
          value={amount === 0 ? "" : amount}
          onChange={(e) => {
            const val = e.target.value;
            // If empty, pass empty string; otherwise, pass the number
            onAmountChange && onAmountChange(val === "" ? "" : Number(val));
          }}
        />
      </div>
      <div className="w-1/2 flex items-center justify-end text-right">
        {/* <p className="text-black/40 mb-2 w-full">Currency Type</p> */}
        <select
          className=" rounded-lg px-2 py-2 bg-gray-100 border border-zinc-200 cursor-pointer outline-none" //og
          value={selectCurrency}
          // here this arrow fn checks Only try to run the function if it actually exists: if onCurrencyChange exists run the function with event's value, this fn is passed as props from app.jsx
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            // when looping (map,filter,reduce,foreach) in jsx, ALWAYS use key attribute
            // currencyOptions is the prop that contain object of collection of the currencies we fetched from the api, using map add all the keys as option in dropdown
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
