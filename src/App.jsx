import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const user = false;

  return (

    <div className="container">
      {
        user ? (<>
        <List />
        <Chat />
        <Detail/>
        </>) : (<Login />)
      }
      <ToastContainer  theme="dark" />
    </div>
  )
}

export default App