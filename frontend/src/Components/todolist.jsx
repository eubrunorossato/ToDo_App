import React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Button from '../template/iconebutton'
import { remove, markAsDone, markAsPending } from "./changeActions"
import '../Style/custom.css'

const Todolist = (props) => {
  const renderRows = () =>{
    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
        <td>
          <Button style='success' icon='check'
            onClick={ () => props.markAsDone(todo) } hide={todo.done}/>
          <Button style='warning' icon='undo'
            onClick={ () => props.markAsPending(todo) }/>
          <Button style = 'danger' icon='trash-o'
          onClick={()=> props.remove(todo)} /></td>
      </tr>
    ))
  }
  return(
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
          {renderRows()}
        </tbody>
    </table>
  )
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = dispatch => bindActionCreators({ remove, markAsDone, markAsPending }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
