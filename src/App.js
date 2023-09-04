import RootStack from "./Routes/RootStack";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <ToastContainer />
      <RootStack />
    </div>
  )
}

export default App;
