import React from 'react';


function Signin() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  function handleSubmit(e){
    e.preventDefault();

    fetch('http://localhost:8000/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      }),
    })
    .then((response) => response.json())
    .then(() => {
      console.log("SUCESSO");
    });

  }

  return(
    <form action="authenticate" method="POST" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="email">E-mail</label>
        <input 
          type="email"
          id="email" 
          inputMode="email" 
          autoComplete="username"
          onChange={({target}) => {setEmail(target.value)}}
          value={email}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Senha</label>
        <input 
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={({target}) => {setPassword(target.value)}}
          value={password}
        />
      </fieldset>
      <button type="submit">Entrar</button>
    </form>
  );
}

export default Signin;