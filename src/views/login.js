import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group'
import 'bootswatch/dist/flatly/bootstrap.css'

export default class Login extends React.Component {
    state = {
        email: '',
        senha: ''
    }

    entrar = () => {
        console.log('Email:', this.state.email)
        console.log('Senha:', this.state.senha)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6" styl={{ position: 'relative', left: '300px' }}>
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Email: *" htmlFor="exampleInputEmail">
                                                <input type="email" value={this.state.email} onChange={ e => this.setState({email: e.target.value})} className="form-control" id="exampleInputEmail"
                                                    aria-describedby="emailHelp" placeholder="Digite o email" />
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlFor="exampleInputPassword">
                                                <input type="password" value={this.state.senha} onChange={ e => this.setState({senha: e.target.value})} className="form-control" id="exampleInputPassword"
                                                    aria-describedby="emailHelp" placeholder="Digite a senha" />
                                            </FormGroup>
                                            <button type="button" className="btn btn-success" onClick={this.entrar} >Entrar</button>
                                            <button className="btn btn-danger">Cadastrar</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}