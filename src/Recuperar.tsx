import { useState } from "react";
import logotipo from "./assets/Imagen1.png";
import "./estilos/registro.css";

const Recuperar = () => {
    const [correo, setCorreo] = useState("");

    const onIngresar = async () => {{
        const url = "http://localhost:4000/usuarios/recuperar";
        const response = await fetch (url, {
            method: "POST",
            body: JSON.stringify({
                Correo: correo
            }),
            headers:{
                "Content-Type":"application/json"
            }
        }); 

        if(!response.ok){
            const mensaje = await response.text();
            alert(mensaje);
        }
        else{
            alert("Correo enviado correctamente");
        }
    }}

    return (
        <div className="contenedor">
        
                    <div className="titulo">Enseña.Me LSM</div>
        
                    <div>
                      <img src={logotipo} className="logo"/>
                </div>
        
                
                <div className="agrupador-correo">
                    <div>Correo Electronico</div>
                    <div>
                        <input
                        type="text"
                        placeholder="Ingresa tu correo electronico"
                        className="caja-correo"
                        value={correo}
                        onChange={(e)=> setCorreo(e.target.value)} />
                        </div>
                    </div>
        
                <div className="agrupador-boton">
                    <button className="boton-ingresar" onClick={()=> onIngresar() }>Recuperar</button>
                </div>
        
                </div>
    );
}

export default Recuperar;