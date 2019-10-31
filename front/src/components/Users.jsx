import React from 'react';


export default (props) => (
  <div className="userList">
    {props.userList
     ?<ul className="list-group">
       {props.userList.map((user, index) => {
         return  <li key={index} className="list-group-item">
         <h4>{user.username}</h4>
         <button onClick={() => {
           props.history.push('/')
           props.handleOtherFaves(user.username)}} 
           className='btn btn-info'> Check faves</button>
         </li> 
       })}
    </ul> : false
    }
 </div>
);