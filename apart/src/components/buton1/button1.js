import './button.css'
const ButtonMenu = ({text, color}) => {
    return(
        <button className="button" style={{color: color}}>{text}</button>
    )
}
export default ButtonMenu;