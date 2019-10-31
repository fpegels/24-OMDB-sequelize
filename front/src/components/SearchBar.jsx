import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return(
  <nav className='navbar navbar-expand-sm bg-light topBar'>
    <li className='nav-item col-lg-9'>
      <form className='form-inline' onSubmit={(event) => {
        event.preventDefault()
        props.history.push('/')
        if (event.target[1].checked){
          props.handleSubmit('movies', event.target[0].value)
        }
        else if (event.target[2].checked) {
          props.handleSubmit('shows', event.target[0].value)
        }
        else {
          props.handleSubmit('both', event.target[0].value)
        }
      }}>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <img className='img-fluid logo' src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Omdb-logo.png'></img>
          </div>
          <input size='30' className='form-control' type='search' placeholder='Search OMDB!' name='search'></input>
          <div className='input-group-append'>
            <button className='btn btn-outline-secondary' type='submit'><i className='fa fa-search'></i></button>
          </div>
        </div>
        <div className='radio'>
          <label>Movies&nbsp;&nbsp;</label>
          <input className='form-control mr-sm-2' type='radio' name='range' value='movies'></input>
          <label>Shows&nbsp;&nbsp;</label>
          <input className='form-control mr-sm-2' type='radio' name='range' value='shows'></input>
          <label>Both&nbsp;&nbsp;</label>
          <input className='form-control mr-sm-2' type='radio' defaultChecked name='range' value='both'></input>
        </div>
      </form>
    </li>
      {props.authenticated
      ?<React.Fragment>
        <div className='dropdown userInter col-lg-3'>
          <button  className='btn btn-info dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            Settings
          </button>
          <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
              <button className='btn btn-info' onClick={()=>{
                props.history.push('/')
                props.handleFaves()
              }}>My Faves!</button>
              <Link to='/users'><button className='btn btn-info'>Users</button></Link>
              <button className='btn btn-danger' onClick={()=> props.handleLogOut()}>Logout</button>
          </div>
      </div>

      </React.Fragment>
      :<React.Fragment>
        <div className='userInter col-lg-3'>
          <div className='button-container' onClick={()=> {
           $('#modalLogin').modal('toggle')
           }}>
          <button data-toggle='modal' data-target='#modalLogin' className='btn btn-info'> Login</button>
         </div>
        </div>
      </React.Fragment>}
      <div className='modal fade' id='modalLogin'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4 className='modal-title'>Login</h4>
            <button type='button' className='close' data-dismiss='modal'>&times;</button>
          </div>
          <div className='modal-body'>
            {!props.authenticated
          ?<form className='userForm' onSubmit={ (event) => {
              event.preventDefault();
              props.handleLogin(event.target[0].value, event.target[1].value)
              props.history.push('/');
             }}> 
              <div>
                <label>Username:&nbsp;&nbsp;</label>
                <input type='username' name='username' placeholder='tito_murena'></input>
              </div>
              <div>
                <label name='password'> Password: &nbsp;</label> 
                <input type='password' name='password' placeholder='**********'></input>
              </div>
              <button className='btn btn-info' type='submit'> Login</button>
             {props.loginTried
               ?<h4 id='warning-login'>Wrong user or password!</h4> : false}
               
 
            </form>:<img className='img-fluid success' src='https://www.benevablack.com/wp-content/uploads/2018/12/check-mark-green-tick-mark.png' onLoad={() => {
              $('#modalLogin').modal('hide')
            }} ></img>}
          </div>
          <div className='modal-footer'>
            {!props.authenticated
          ? <a href='#' className='modalA' data-dismiss='modal' data-toggle='modal' data-target='#modalRegister' >I don't have an account</a>
            : false}
            <button type='button' className='btn btn-danger' data-dismiss='modal'>Close</button>
          </div>
        </div>
      </div>
    </div>    

    <div className='modal fade' id='modalRegister'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4 className='modal-title'>Register</h4>
            <button type='button' className='close' data-dismiss='modal'>&times;</button>
          </div>
          <div className='modal-body'>
          {!props.authenticated
          ?  <form className='userForm' onSubmit={ (event) => {
              event.preventDefault();
              props.handleReg(event.target[0].value, event.target[1].value);
              props.history.push('/');
              }}>
              <div>
                <label>Username: &nbsp;&nbsp;</label>
                <input type='username' name='username' placeholder='tito_murena'></input>
              </div>
              <div>
                <label name='password'> Password: &nbsp;&nbsp;</label> 
                <input type='password' name='password' placeholder='**********'></input>
              </div>
              <button className='btn btn-info' type='submit'> Register</button>
              {props.regTried
                ?<h4 id='warning-register'>Username taken or fields empty!</h4>
                :false}
            </form>:<img className='img-fluid success' src='https://www.benevablack.com/wp-content/uploads/2018/12/check-mark-green-tick-mark.png' onLoad={() => {
              $('#modalRegister').modal('hide')
            }} ></img>}
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-danger' data-dismiss='modal'>Close</button>
          </div>
        </div>
      </div>
    </div>

  </nav>
);
}
