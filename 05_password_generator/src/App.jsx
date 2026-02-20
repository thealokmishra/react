import { useState, useCallback, useEffect, useRef, use } from "react";

export default function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef is used to create a reference to the input element, it takes an initial value as an argument, in our case we are passing null as the initial value, this is useful to access the DOM element directly and to manipulate it, in our case we will use it to copy the password to the clipboard when the user clicks the copy button.
  const passwordRef = useRef(null);

  // useCallback is used to memoize the function, it takes first argument as the function and second argument as the dependencies in an array, it will only re-create the function if any of the dependencies change, in our case the dependencies are length, numberAllowed and symbolAllowed, so the function will only re-create if any of these dependencies change, otherwise it will return the same function reference, this is useful to prevent unnecessary re-renders and to optimize performance.
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (symbolAllowed) str += "!@#$%&*";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length); //choose random index
      pass += str.charAt(charIndex); //get the character at that index, add it to the password string
    }

    setPassword(pass);
  }, [length, numberAllowed, symbolAllowed]);

  // useEffect is used to run the function when the dependencies change, in our case the dependencies are length, numberAllowed and symbolAllowed, so the function will run whenever any of these dependencies change, this is useful to generate a new password whenever the user changes the length or toggles the number or symbol options.
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, symbolAllowed, passwordGenerator]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select(); // Select the text in the input field, highligts the text in the input field, NOT really necessary for copying but provides visual feedback to the user
    window.navigator.clipboard.writeText(password); //copy to clipboard using the Clipboard API, ALSO we don't have access of window object in framework like nextjs!
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-xl p-3 my-8 text-green-600 bg-gray-800">
        <h1 className="text-2xl font-bold text-gray-200 text-center mb-4">
          Password Generator
        </h1>
        <div className="flex rounded-lg overflow-hidden">
          <input
            type="text"
            value={password}
            className="w-full p-2 bg-gray-700 text-white border-0 focus:outline-none"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="bg-green-600 text-white px-4 py-2 shrink-0 transition-all duration-200 
             hover:bg-green-500 
             active:bg-green-800 active:scale-95
             cursor-pointer"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-row gap-4 p-6">
          <label className="block text-sm font-medium mt-4 mb-2 text-gray-300">
            Password Length: {length}
            <input
              id="minmax-range"
              type="range"
              min="8"
              max="16"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full h-2 bg-gray-200 dark:bg-neutral-700 rounded-full appearance-none cursor-pointer accent-green-600"
            ></input>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(!numberAllowed)}
              className="w-5 h-5 rounded border-neutral-500 bg-neutral-800 text-green-500 focus:ring-green-500 focus:ring-offset-neutral-900"
            />
            <span className="text-sm font-medium text-gray-300 group-hover:text-green-400 transition-colors">
              Numbers
            </span>
          </label>

          {/* Symbols Checkbox */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={symbolAllowed}
              onChange={() => setSymbolAllowed(!symbolAllowed)}
              className="w-5 h-5 rounded border-neutral-500 bg-neutral-800 text-green-500 focus:ring-green-500 focus:ring-offset-neutral-900"
            />
            <span className="text-sm font-medium text-gray-300 group-hover:text-green-400 transition-colors">
              Symbols
            </span>
          </label>
        </div>
      </div>
    </>
  );
}
