import React, { Component } from 'react';
import Header from '../template/pageheader'
import Form from '../todo/todoform';
import List from '../todo/todolist'
export default class Todo extends Component {
  render() {
    return (
      <div>
        <Header name='Tarefas' small='Cadastro'/>
        <Form/>
        <List/>
      </div>
    );
  };
}
