import { useRef, useState } from "react";

const NoControlado = () => {
    
    const form = useRef(null)
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // capturar los datos
        const data = new FormData(form.current);

        //console.log([...data.entries()]);

        //const dataObject = Object.fromEntries([...data.entries()]);

        //console.log(dataObject);

        const {title, description, state} = Object.fromEntries([...data.entries()]);

        console.log(title, description, state);

        // validar los datos
        if(!title.trim() || !description.trim() || !state.trim()) return setError('Llena todos los campos')

        //enviar los datos
    };

    /*document.addEventListener('submit', (evento) => {
        evento.preventDefault()
    })*/
    
    return (
        <form onSubmit={handleSubmit} ref={form}>
            
            <input 
                type="text" 
                placeholder="Ingrese Todo" 
                className="form-control mb-2"
                name="title" //no olvidar utilizar atributo name cuando se usa FormData
                defaultValue="cosito"
            />
            
            <textarea 
                className="form-control mb-2"
                placeholder="Ingrese Descripción"
                name="description"
                defaultValue="gatito"
            />

            <select 
                className="form-select mb-2" 
                name="state"
                defaultValue={"completado"} 
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>

            <button type="submit" className="btn btn-primary">Procesar</button> 
            {
                error !== '' && error
            }
        </form>
    );
};

export default NoControlado;