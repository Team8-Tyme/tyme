import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { signOut } from '../../store/actions/authActions';
import Button from '@material-ui/core/Button';


export const SignedInLinks = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        <li><Button onClick={() => dispatch(signOut())}> Log Out</Button></li>
        {/* <li><NavLink to='/' className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink></li> */}
      </ul>
    </div>
  )
}



