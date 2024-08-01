import {BrowserRouter, Routes, Route} from "react-router-dom";
// import UserList from "./components/UserList";
// import AddUser from "./components/AddUser";
// import EditUser from "./components/EditUser";
import AddResponden from "./components/AddResponden";
import Home from "./components/home";
import Survey  from "./components/survey";
import Admin from "./components/admin";


function App() {
  return (
    <BrowserRouter>    
      <Routes>
        {/* <Route path="/a" element={<UserList/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="edit/:id" element={<EditUser/>}/> */}
        <Route path="/addresponden" element={<AddResponden/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/survey/:id" element={<Survey/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;