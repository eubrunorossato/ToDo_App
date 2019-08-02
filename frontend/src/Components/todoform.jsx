import React from 'react';
import Grid from '../template/grid'
import Button from '../template/iconebutton'

export default props =>(
  <div role='form' className='todoForm'>
      <Grid cols='12 9 10 '>
        <input id='description' className='form-control' placeholder='Adcione uma tarefa'
        onChange={props.handlleChange}
        value={props.description}></input>
      </Grid>
      <Grid cols='12 3 2'>
        <Button style='primary' icon='plus' onClick={props.handlleAdd}/>
      </Grid>
  </div>
)
