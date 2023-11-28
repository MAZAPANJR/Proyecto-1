import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logotipo from "./assets/Imagen1.png";
import "./estilos/registro.css";


const Registro = () => {

    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");

    const onIngresar = async () => {{
        const url = "http://localhost:4000/usuarios/registrar";
        const response = await fetch (url, {
            method: "POST",
            body: JSON.stringify({
                Nombre: nombre,
                Correo: correo,
                Contraseña: password
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
            alert("Usuario registrado correctamente");
            navigate("/");
        }
    }}
    return (
        
                <div className="contenedor">
        
                    <div className="titulo">Enseña.Me LSM</div>
        
                    <div>
                      <img src={logotipo} className="logo"/>
                </div>
        
                <div className="agrupador-correo">
                    <div>Nombre</div>
                    <div>
                        <input
                        type="text"
                        placeholder="Ingresa tu nombre"
                        className="caja-correo"
                        value={nombre}
                        onChange={(e)=> setNombre(e.target.value)} />
                        </div>
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
        
                    <div className="agrupador-password">
                    <div>Contraseña</div>
                    <div>
                        <input
                        type="password"
                        placeholder="Password"
                        className="caja-password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>
                </div>
        
                <div className="agrupador-boton">
                    <button className="boton-ingresar" onClick={()=> onIngresar() }>Ingresar</button>
                </div>
        
                <div className="otros-botones">
                    <a href="/registro" className="link-registro">Registrarse</a>
                    <a href="/recuperar-password" className="link-password">Olvidé mi contraseña</a>
                    </div>
        
                </div>
            )
    }

    export default Registro
