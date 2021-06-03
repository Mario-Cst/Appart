import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import MenuButton from './components/buttonmenu/buttonmenu';
import Landing from "./components/landing/landing";
import NavBar from './components/navbar/navbar';
import UserPage from "./components/userpage/userpage";
import VanPage from "./components/vanpage/vanpage";
import DispPage from "./components/disppage/dispage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/users">
            <MenuButton/>
            <UserPage/>
          </Route>
          <Route path="/vans">
            <MenuButton/>
            <VanPage/>
          </Route>
          <Route path="/disp">
            <MenuButton/>
            <DispPage/>
          </Route>
          <Route path="/">
            <Landing/>
          </Route>
          
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
