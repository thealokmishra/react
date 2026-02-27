// the problem with using global js file for accessing var is bad because wherever that variable is accessed each component can update that variable
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
function App() {
  return (
    // whatever component we will use inside the context wrapper will have access to the data that we pass through our UserContextProvider.jsx
    <UserContextProvider>
      <h1>Illi Nodi</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
