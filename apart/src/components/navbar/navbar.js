import './navbar.css';
import menuIcon from '../img/user_pic.png';
import ButtonMenu from '../buton1/button1';

const NavBar = () => {
    return (
        <div className = "container">
            <div className= "con_logo">
                Appart
            </div>
            <div className="cont_login">
                <ButtonMenu color="#20232a" text="˅"></ButtonMenu>
                <img src= {menuIcon} alt=""/>
                <ButtonMenu text="Login"></ButtonMenu>
                <ButtonMenu text="ContactUs"></ButtonMenu>
                
            
            </div>
        </div>
    );
};

export default NavBar;
