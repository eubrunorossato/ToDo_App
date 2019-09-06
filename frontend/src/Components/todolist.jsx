import React from 'react';
import { connect } from "react-redux"
import Button from '../template/iconebutton'
import '../Style/custom.css'

const Todolist = (props) => {
  const renderRows = () =>{
    console.log(props);

    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
        <td>
          <Button style='success' icon='check'
            onClick={ () => props.handleMarkAsDone(todo) } hide={todo.done}/>
          <Button style='warning' icon='undo'
            onClick={ () => props.handleAsPending(todo) }/>
          <Button style = 'danger' icon='trash-o'
          onClick={()=> props.handleRemove(todo)} /></td>
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
export default connect(mapStateToProps)(Todolist);
