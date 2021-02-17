import React, {useState, FormEvent, useEffect} from 'react';
import api from '../../services/api'
import {Link} from 'react-router-dom'
import {Form, Card} from './style'

// import { Container } from './style';

interface IUser {

    cpf: string,
    login: string,
    nome: string,
    senha: string
}

const Home: React.FC = () => {

    const [ user, setUser] = useState([]);

    // async function handleAddUser(event: FormEvent<HTMLFormElement>){
    //     event.preventDefault();
    //     const response = await api.post();
    // }



  return(
      <>
        <Card>
            <h1>Gama Bank é um projeto de nossos alunos.</h1>
            <h4>Já tem conta?</h4>
        </Card>

        <Form>
            <input 
                type="text" 
                placeholder="CPF">
            </input>

            <input  
                type="text" 
                 placeholder="nome completo" >
            </input>

            <input 
                type="text" 
                placeholder="Nome do usuário">
            </input>

            <input 
                type="text" 
                placeholder="Digite sua senha">
            </input>

            <input 
                type="text" 
                placeholder="Confirme sua senha">
            </input>

            <button>Cadastrar</button>
        </Form>

      </>
  );
}

export default Home;