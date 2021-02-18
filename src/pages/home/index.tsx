import React, {useState, FormEvent, useEffect,} from 'react';
import api from '../../services/api'
import {Link, useHistory} from 'react-router-dom'
import {Form, Card, Content} from './style'

interface IUser {
    cpf: string,
    login: string,
    nome: string,
    senha: string
}

const Home: React.FC = () => {

    const history = useHistory();
    
    const [ cpf, setCpf] = useState('');
    const [ name, setName] = useState('');
    const [ userName, setUserName] = useState('');
    const [ password, setPassword] = useState('');
    const [ confirmPassword, setConfirmPassword] = useState('');



    function createAccount(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const postData = {
            cpf: cpf,
            login: userName,
            nome: name,
            senha: password
        }
        if(password !== confirmPassword){
            alert('error pass')
            return;
        }
     
        try{
            api.post(`usuarios`, postData).then(
                res =>{
                    if(res.status ===200){
                      history.push('/login')  
                    }
                    else{
                        alert('algo deu errado, tente novamente')
                    }
                }
            )
        }
        catch(e){
            alert('algo deu errado')

        }
    }

  return(
    <Content>
        <Card>
            <h1>Gama Bank é um projeto de nossos alunos.</h1>
            <h4>Já tem conta?</h4>
        </Card>

        <Form onSubmit={createAccount}>
            <input 
                value={cpf}
                onChange={e => setCpf(e.target.value)}
                type="text" 
                placeholder="CPF">
            </input>

            <input  
                value={name}
                onChange={e => setName(e.target.value)}
                type="text" 
                 placeholder="nome completo" >
            </input>

            <input
                value={userName}
                onChange={e => setUserName(e.target.value)}
                type="text" 
                placeholder="Nome do usuário">
            </input>

            <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="text" 
                placeholder="Digite sua senha">
            </input>

            <input
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                type="text" 
                placeholder="Confirme sua senha">
            </input>
            <button type="submit">Cadastrar</button>
        </Form>
    </Content>
  );
}

export default Home;