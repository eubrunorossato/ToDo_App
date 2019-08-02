import React, { Component } from 'react';
import Header from '../template/pageheader';
import axios from 'axios';
import Form from './todoform';
import List from './todolist';

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

  constructor(props) {
    super(props)

    this.state = { description: '' , list:[] }
    this.handlleAdd = this.handlleAdd.bind(this)
    this.handlleChange = this.handlleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPanding = this.handleMarkAsPanding.bind(this)
  }

  refresh(){
    axios.get(`${URL}?=sort=-createdAt`)
      .then(resp => this.setState({ ...this.setState, description : '', list : resp.data }))
  }

  handlleChange(e){
    this.setState({...this.state, description: e.target.value })
  }

  handlleAdd(){
    const description = this.state.description
    axios.post(URL, { description })
      .then(resp=> this.refresh())
  }

  handleRemove(todo){
    axios.delete(`${URL}/${todo._id}`)
      .then(resp => this.refresh())
  }

  handleMarkAsDone(todo){
    axios.put(`${URL}/${todo._id}`, { ...todo, done:true })
      .then(resp => this.refresh())
  }

  handleMarkAsPanding(todo){
    axios.put(`${URL}/${todo._id}`, { ...todo, done:false })
      .then(resp => this.refresh())
  }

  render() {
    return (
      <div>
        <Header name='Tarefas' small='Cadastro'/>
        <Form description={this.state.description}
        handlleChange={this.handlleChange}
        handlleAdd={this.handlleAdd} />
        <List  list={this.state.list}
          handleRemove={this.handleRemove}
          handleAsPending={this.handleMarkAsPanding}
          handleMarkAsDone={this.handleMarkAsDone}/>
      </div>
    );
  };
}
