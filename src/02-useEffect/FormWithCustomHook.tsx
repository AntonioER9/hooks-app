import { useForm } from '../hooks/useForm';

interface FormData {
    username: string;
    email: string;
    password: string;
}

export const FormWithCustomHook = () => {

    const { onInputChange, onResetForm, username, email, password } = useForm<FormData>({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;
  

    return (
        <>
            <h1>Formulario con custom Hook</h1> 
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="antonio@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>

        </>
    )
}