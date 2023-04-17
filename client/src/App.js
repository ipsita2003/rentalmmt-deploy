// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import { Routes } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import Home from './components/Home';
import ShowRoomList from './components/ShowRoomList';
import ShowRoomDetails from './components/ShowRoomDetails'; 
import UpdateRoom from './components/UpdateRoom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
       
          <Route path="/create-user" element={ <CreateUser /> } />
          <Route path="/edit-room/:id" element={ <UpdateRoom />} />
          {/* <Route path="/show-Room/:id" element = {<ShowRoomList /> } /> */}
          <Route path="/show-room/:id" element={ <ShowRoomDetails />} />
          <Route exact path="/" element={ <Home /> } />  
          <Route exact path="/show-list" element={ <ShowRoomList/> } />  


        </Routes>
      </div>

    </Router>
  );
}

export default App;
