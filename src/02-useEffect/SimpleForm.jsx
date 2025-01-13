import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState ({ 
    username: 'strider',
    email: 'arturo@correo.com'
  });

  const { username, email } = formState; // esta es la manera de desestructurar el objeto
  

  const onInputChange = ({target }) => {
  
    const { name, value } = target;
    setFormState({
      ...formState,  // lo utilizamos para copiar las propiedasdes del objeto
      [name]: value  // esta es la manera de actualizar el objeto
    });
  }

  // Recuerda que el useEffect se ejecuta
  // cuando el componente se renderiza cada vez
//  useEffect(() => {
//    console.log('UseEffect called!');
//  });

  //Pero tambien podemos hacer que se ejecute cada vez que una parte del componente cambie

  useEffect(() => {
   // console.log('UseEffect called, solo se invoca una vez!');
  }, []);

  useEffect(()=> {
  //  console.log('username changed!');
  }, [username]);

  useEffect(()=> {
    //console.log('email changed!');
  }, [email]);


  
  return (
   
    <>
    <h1>Formulario Simple</h1>
    <hr/>

    <input type='text'
    className='form-control'

    placeholder='Username'
    name="username"
    value={username}
    onChange={onInputChange}
    >
        
    </input>

    <input type='text'
    className='form-control mt-2'

    placeholder='correro@gmail.com'
    name="email"
    value={ email }
    onChange={onInputChange}
    > 
    </input>

    {
      username === 'strider2' && <Message />
    }
  
    </>
  )
}
