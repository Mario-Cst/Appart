import './button2.css'
import { useHistory } from "react-router-dom";

const Button2 = ({color,path, text, fontsize, fontweight}) => {
    const history = useHistory();
    return(
        <button onClick={()=> history.push(path)} className="button2" style={{color: color, fontSize: fontsize, fontWeight: fontweight}}>{text}</button>
    )
}
export default Button2;