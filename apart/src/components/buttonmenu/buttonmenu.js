import Button2 from '../button2/button2'
import './buttonmenu.css'

const MenuButton = () => {
    return(
        <div className="container_menu">
            <Button2 path="/home" text="Home"/>
            <Button2 path="/users" text="Usuarios"/>
            <Button2 path="/vans" text="Vans"/>
            <Button2 path="/disp" text="Dispositivos"/>
            <Button2 text="Rutas"/>
            <Button2 text="Control Horario"/>
            <Button2 text="Calendario"/>

        </div>

    )
}

export default MenuButton;