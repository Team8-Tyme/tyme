import React from 'react'
import { useDispatch } from "react-redux";
import { signOut } from '../../store/actions/authActions';
import Button from '@material-ui/core/Button';



export const SignedInLinks = () => {
  const dispatch = useDispatch();
  return (
    <Button 
    onClick={() => dispatch(signOut())}
    size="small"
    variant="contained" 
    style={{
        backgroundColor: '#202024',
        color: "#FFF",
        marginLeft: "auto",
        marginRight: -13,
        padding: 11,
        fontSize: 10
    }}
    > Log Out</Button>
  )
}



