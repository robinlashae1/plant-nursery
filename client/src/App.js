import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import OtherPlant from "./pages/OtherPlant";
import Nursery from "./pages/Nursery";
import SignUp from "./Forms/SignUp";
import Login from "./Forms/Login"
import Rescue from "./pages/Rescue";
import About from "./pages/About";
import { Route, Switch, BrowserRouter} from "react-router-dom";
import "./App.css";

function App() {
    const [user, setUser] = useState(null);
    const [plantsTypesData,setPlantTypesData]=useState([])
    const [loginModalShow, setLoginModalShow] = useState(false);
    const [signupModalShow, setSignupModalShow] = useState(false);
    const [usersPlants, setUsersPlants]=useState([])

   useEffect(() => {
    fetch("/plant_types")
    .then((r) => r.json())
    .then((plants) => setPlantTypesData(plants))
  }, []);
console.log(plantsTypesData)
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);}
        });
    }
    useEffect(() => {
        fetch("/me").then((r) => {
        if (r.ok) {
            r.json()
            .then((user) => setUser(user));}
        });
    }, []);
    useEffect(() => {
      fetch("/usersPlants").then((r) => {
      if (r.ok) {
          r.json()
          .then((plants) => setUsersPlants(plants));}
      });
  }, []);

  
      
          return (
      user?
        <div className='App'>
      <BrowserRouter>
      <Switch>
          <Route exact path="/" >
            <HomePage signupModalShow={signupModalShow} setSignupModalShow={setSignupModalShow} setLoginModalShow={setLoginModalShow} loginModalShow={loginModalShow} handleLogoutClick={handleLogoutClick} user={user} setUser={setUser}/>
          </Route>
          <Route exact path="/about">
            <About handleLogoutClick={handleLogoutClick} user={user}/>
          </Route>
          <Route exact path="/nursery" >
            <Nursery setUsersPlants={setUsersPlants} usersPlants={usersPlants} handleLogoutClick={handleLogoutClick} plantsTypesData={plantsTypesData} user={user} setUser={setUser} setLoginModalShow={setLoginModalShow} loginModalShow={loginModalShow}/>
          </Route>
          <Route exact path="/rescue">
            <Rescue/>
          </Route>
          <Route exact path="/all_Plants">
            <OtherPlant handleLogoutClick={handleLogoutClick} user={user} plants={plantsTypesData} />
          </Route>
          <Route exact path="/signup">
            <SignUp onLogin={setUser}/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/rescue">
            <Rescue setLoginModalShow={setLoginModalShow} loginModalShow={loginModalShow} user={user} setUser={setUser}/>
          </Route>
          <Route>
            <Rescue loginModalShow={loginModalShow} setLoginModalShow={setLoginModalShow} setUser={setUser} user={user}/>
          </Route>
      </Switch>
      </BrowserRouter>
    </div>:
     <div className='App'>
     <BrowserRouter>
     <Switch>
         <Route exact path="/" >
           <HomePage signupModalShow={signupModalShow} setSignupModalShow={setSignupModalShow} setLoginModalShow={setLoginModalShow} loginModalShow={loginModalShow} handleLogoutClick={handleLogoutClick} user={user} setUser={setUser}/>
         </Route>
         <Route exact path="/about">
           <About handleLogoutClick={handleLogoutClick} user={user}/>
         </Route>
         <Route exact path="/rescue">
           <Rescue/>
         </Route>
         <Route exact path="/all_Plants">
           <OtherPlant handleLogoutClick={handleLogoutClick} user={user} plants={plantsTypesData} />
         </Route>
         <Route exact path="/signup">
           <SignUp onLogin={setUser}/>
         </Route>
         <Route exact path="/login">
           <Login />
         </Route>
         <Route exact path="/rescue">
           <Rescue setLoginModalShow={setLoginModalShow} loginModalShow={loginModalShow} user={user} setUser={setUser}/>
         </Route>
         <Route>
           <Rescue loginModalShow={loginModalShow} setLoginModalShow={setLoginModalShow} setUser={setUser} user={user}/>
         </Route>
     </Switch>
     </BrowserRouter>
   </div>
  )}
// }

export default App;
