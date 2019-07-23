import React, { Component } from 'react';
import Header from '../template/pageheader';
import axios from 'axios';
import Form from '../todo/todoform';
import List from '../todo/todolist';

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

  constructor(props) {
    super(props)

    this.state = { description: '' , list:[] }
    this.handlleAdd = this.handlleAdd.bind(this)
    this.handlleChange = this.handlleChange.bind(this)
  }

  handlleChange(e){
    this.setState({...this.state, description: e.target.value })
  }

  handlleAdd(){
    const description = this.state.description
    axios.post(URL, { description })
      .then(resp=> console.log('funcionouw'))
  }

  render() {
    return (
      <div>
        <Header name='Tarefas' small='Cadastro'/>
        <Form description={this.state.description}
        handlleChange={this.handlleChange}
        handlleAdd={this.handlleAdd}/>
        <List/>
      </div>
    );
  };
}
