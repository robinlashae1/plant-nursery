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

   useEffect(() => {
    fetch("/plant_types")
    .then((r) => r.json())
    .then((plants) => setPlantTypesData(plants))
  }, []);

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

//plantsTypesData
console.log(user)
          return (
        <div className='App'>
      <BrowserRouter>
      <Switch>
          <Route exact path="/" >
            <HomePage user={user} setUser={setUser} user={user}/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/nursery" >
            <Nursery plantsTypesData={plantsTypesData} user={user} setUser={setUser}/>
          </Route>
          <Route exact path="/rescue">
            <Rescue/>
          </Route>
          <Route exact path="/all_Plants">
            <OtherPlant plants={plantsTypesData} />
          </Route>
          <Route exact path="/signup">
            <SignUp onLogin={setUser}/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
  )}
// }

export default App;
