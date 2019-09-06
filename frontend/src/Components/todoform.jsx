import React, { Component } from 'react';
import Grid from '../template/grid'
import { connect } from "react-redux";
import Button from '../template/iconebutton';
import { bindActionCreators } from "redux";
import { changeDescription, search, add } from "./changeActions";

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.keyhandler = this.keyhandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyhandler(e) {
    const { add, search, description } = this.props
    if (e.key === "Enter") {
      e.shiftKey ? search() : add(description)
    } else if (e.key === "Escape") {
      props.handleClear()
    }
  }

  render () {
    const { add, search, description } = this.props
    return (
    <div role='form' className='todoForm'>
      <Grid cols='12 9 10 '>
        <input id='description' className='form-control' placeholder='Adcione uma tarefa'
        onChange={this.props.changeDescription}
        onKeyUp={this.keyhandler}
        value={this.props.description}></input>
      </Grid>
      <Grid cols='12 3 2'>
        <Button style='primary' icon='plus' onClick={() => add(description)}/>
        <Button style='primary' icon='close' onClick={() => search()}/>
      </Grid>
    </div>
    )
  }
}
const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatachToProps = dispatch => bindActionCreators({ add, changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatachToProps)(TodoForm)
