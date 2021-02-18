import React, {useState, FormEvent, useEffect} from 'react';
import api from '../../services/api'
import {Link, useHistory} from 'react-router-dom'
import {Form, Content} from './style'

// import { Container } from './styles';

const Login: React.FC = () => {

  const history = useHistory();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');


  function loginSys(event: FormEvent<HTMLFormElement>){

    event.preventDefault();

    const data = {
      usuario: login,
      senha: password,
    }

    api.post(`login`,data ).then(
      res => {
        console.log(res.data)
        localStorage.setItem('@tokenApp', res.data.token)
        // history.push('/dasboard')
      }
      
    )

  }

  return(
    <Form onSubmit={loginSys}>
        <input
          value={login}
          onChange={e => setLogin(e.target.value)}
          type="text" 
          placeholder="Nome do usuário">
        </input>

        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password" 
          placeholder="Digite sua senha">
        </input>

        <button type="submit">Entrar</button>
    </Form>
    
    
    
    );
}

export default Login