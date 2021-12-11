import { useEffect, useState } from "react";
import "./component/logreg.css"
import {HashRouter as Router,Routes,Route,Link} from "react-router-dom"
import Login from "./component/Login"
import Register from "./component/Register"

function getlocalUser(){
  if(JSON.parse(localStorage.getItem("user")).length > 0)
  {
    return JSON.parse(localStorage.getItem("user"))
  }
  else
  {
    return []
  }
}

function App() {
  const [data,setData] = useState(getlocalUser())
  const [loggedin,setLoggedin] = useState(false)

  useEffect(()=>{
    localStorage.setItem("user",JSON.stringify(data))
  },[data])
  if(loggedin)
  {
    return (
      <div className="my_page">
          <h1>welcome to my page</h1>
      </div>
    )
  }
  else
  return (
    <div className="App">
      <Router>
      <main>
        <nav>
          <ul>
            <li><Link to = "/">Login</Link></li>
            <li><Link to = "/register">Register</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path = "/" element = {<Login data = {data} loggedin = {loggedin} setLoggedin = {setLoggedin}/>}/>
          <Route path = "/register" element = {<Register data = {data} setData={setData}/>}/>
        </Routes>
      </main>
      </Router>
    </div>
  );
}

export default App;
