import React from 'react';
import Menu from './menu';
import Button from '../template/iconebutton';

export default props => (
  // <div className='container'>
  // <Menu tasks="Tasks"/>
  // </div>
  <div className='container'>
    <div className='form-group'>
      <div className='container'>
        <div className='row'>
          <col className='col-sm-3'></col>
          <div className='col-sm-3'>
            <h3>User</h3>
            <input id='userName' placeholder='User Name' className='form-control'></input>
            <h3>Password</h3>
            <input id='password' placeholder='Password' className='form-control'></input>
            <Button style='btn btn-primary btn-lg' name='Login'/>
          </div>
          <col className='col-sm-3'></col>
        </div>
      </div>
    </div>
  </div>
)
