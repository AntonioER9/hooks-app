import { ChangeEvent, useEffect, useState } from 'react';
import { Message } from './Message';
// import { Message } from './Message';


export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'tony',
    email: 'antonio@google.com'
  });

  const { username, email } = formState;

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  }


  useEffect(() => {
    // console.log('useEffect called!');
  }, []);

  useEffect(() => {
    // console.log('formState changed!');
  }, [formState]);

  useEffect(() => {
    // console.log('email changed!');
  }, [email]);



  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="antonio@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {
        (username === 'tony') && <Message />
      }

    </>
  )
}