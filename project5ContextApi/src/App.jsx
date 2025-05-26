import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <div className='flex flex-col items-center justify-center h-screen '>
        <div className='border-2 border-gray-800 rounded-lg shadow-lg p-10 bg-gray-200 shadow-gray-500 '>
          <h1 className='text-7xl py-3 font-semibold'>Hello, User!</h1>
          <Login />
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
