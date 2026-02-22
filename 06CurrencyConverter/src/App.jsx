import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo"; //custom hook
import backgroundImage from "./assets/bg.jpg";
import { SwapIcon } from "./components/SwapIcon";

function App() {
  const [amount, setAmount] = useState(""); //get amount from input
  const [from, setFrom] = useState("usd"); //convert from currency, use usd by default
  const [to, setTo] = useState("inr"); //convert to currency, use inr by default
  const [convertedAmount, setConvertedAmount] = useState(); //to set converted amount to result

  const currencyInfo = useCurrencyInfo(from); //pass the from currency to the custom hook and get the currency object with all exchange rates

  const options = Object.keys(currencyInfo); //taking the currency object you got from your API and turning it into a simple list of keys (currency Names).

  // function to swap the from and to currencies
  const swap = () => {
    setFrom(to);
    setTo(from);
    // setConvertedAmount(amount);
    // setAmount(convertedAmount);
  };

  // function to convert the amount to desired currency
  const convert = () => {
    // Multiply, then fix to 3 decimal places, then turn back into a Number, because fixed returns a string
    const result = (amount * currencyInfo[to]).toFixed(3); //currencyInfo[to] gets the exchange rate for the 'to' currency
    setConvertedAmount(Number(result));
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="w-full mx-3">
        <div className="w-full max-w-md mx-auto border border-white/50 rounded-xl p-5 backdrop-blur-sm bg-white/10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert(); //convert the amount on form submit
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                placeholder="Enter amount"
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                //when amount is entered, update the amount state to entered value
                onAmountChange={(val) =>
                  setAmount(val === "" ? "" : Number(val))
                }
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full bg-blue-600 text-white p-2 shadow-lg shadow-blue-600/50 hover:bg-blue-700 transition-all duration-200 active:scale-90"
                onClick={swap}
              >
                <SwapIcon className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount} //show the converted amount in result
                placeholder="Result"
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable //disables the result input
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold border-2 border-blue-300 hover:bg-blue-700 transition-colors"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
