import React, { useState } from 'react';
import api from './services/api'


function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  async function handleSubmit(e){
    e.preventDefault();
    const response = await api.post('/login', {
      email, 
      senha
    })

    setEmail('')
    setSenha('')
  }


  return (
  <div class="form">
    <form class="login-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="E-mail*"
      required value={email} onChange={e => setEmail(e.target.value)}/>
      <input type="password" placeholder="Senha*"
      required value={senha} onChange={e => setSenha(e.target.value)}/>
      <button><b>Acessar</b></button>
    </form>
  </div>
  );
}

export default App;
