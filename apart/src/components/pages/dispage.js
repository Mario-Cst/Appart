import Button2 from '../button2/button2'
import './pages.css'
const DispPage = () => {
    return(
        <div className="PageContainer">
            <div className="PageTitulo">
                <Button2 fontweight= "bold" fontsize="30px"text="Dispositivos"/>
            </div >
            <div className="MainContent">
                <div className="Submenu">
                    <Button2 text="General"/>
                    <Button2 text="Lista"/>
                    <Button2 text="Gestor"/>
                    <Button2 text="Revisiones"/>
                    <Button2 text="Estado"/>
                </div>
                <div className = "true_content">
                    <div className="table">
                        <h1>tabla</h1>
                    </div>
                    <div className="form">
                        <h1>tabla</h1>
                    </div>
                    
                    
                    
                    

                </div>

            </div>
        </div>
    )
}
export default DispPage;