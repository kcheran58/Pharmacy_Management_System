import React, { useState } from 'react';
import './LoginForm.css';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'; 
import Button from '@mui/material/Button';
import { AppBar, Toolbar, Typography} from '@mui/material';

const LoginForm = () => {
  const [userName, setUsername] = useState('');
  const [password,setPassword]=useState('');
  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword=(event)=>
  {
    setPassword(event.target.value);
  }

  return (
    <div className="body">
    <AppBar position='absolute'>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Pharmacy Management System</Typography></Toolbar>
      </AppBar>
      <div className="login-form">
        <h1 style={{ textAlign: "center", textShadow: "0 0 10px 15px #48abe0", color: "black" }}>Login</h1><br /><br />

        <TextField className="text" id="filled-basic" label="UserName" type="text" variant="filled" value={userName} onChange={handleChange} /><br /><br /><br />
        <TextField className="text"
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          value={password} onChange={handlePassword}/>
          <br /><br />
        <a href="#" style={{ marginLeft: "-190px" }}>forget password?</a>
        <br /><br /><br />
        <Button variant="contained" href="#contained-buttons" style={{ backgroundColor: "darkblue", color: "white" }}>Sign in</Button>

        {/* <button style={{width:"50px",height:"45px",border:"1px solid",borderRadius:"100%",textAlign:"center"}}><img style={{width:"30px",height:"30px"}}src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/></button>*/}
        <br />
        <p color= "black" >or</p>
          <Link to="/registration" style={{ textDecoration: 'none', color: 'inherit' }}>
         <a href="#">create a new account?</a>
            </Link>
      </div>
    </div>
  );
};

export default LoginForm;
