import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import MenuButton from './components/buttonmenu/buttonmenu';
import Landing from "./components/landing/landing";
import NavBar from './components/navbar/navbar';
import UserPage from "./components/pages/userpage";
import VanPage from "./components/pages/vanpage";
import DispPage from "./components/pages/dispage";
import RutasPage from "./components/pages/rutaspage";

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
          <Route path="/rutas">
            <MenuButton/>
            <RutasPage/>
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
