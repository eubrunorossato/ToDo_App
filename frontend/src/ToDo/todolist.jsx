import React from 'react';
import Button from '../template/iconebutton'
import '../template/custom.css'

export default props=> {
  const renderRows = () =>{
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
