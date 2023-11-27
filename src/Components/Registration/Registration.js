import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import TextField from '@mui/material/TextField';
import './Registration.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import axios from 'axios';

export const Registration = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    gender: ''
  });

  const handleSubmit = (e) => {
    const post=async()=>{
      try{
      await axios.post("http://localhost:3001/users",user);
      }
      catch(err)
      {
        alert(err);
      }
    }
    post();
   
  };


  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value
    }));
  };

  const handleGenderChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      gender: e.target.value
    }));
  };

  return (
    <div className='body1'>
      <h1>PHARMACY MANAGEMENT SYSTEM</h1>
      <div className='form1'>
        <div className='form-items1'>
          <h2>Registration</h2>
        </div>
        <div className='form-items1'>
          <label className='label1' htmlFor='name'>
            <b>Full Name:</b>
          </label>
          <label className='label1' htmlFor='uname'>
            <b>UserName:</b>
          </label>
        </div>
        <div className='form-items1'>
          <div className='label1'>
            <TextField
              id='name'
              value={user.name}
              onChange={handleChange}
              className='text1'
              label='Full Name'
              variant='outlined'
              aria-required
            />
          </div>
          <div className='label1'>
            <TextField
              id='username'
              value={user.username}
              onChange={handleChange}
              className='text1'
              label='User Name'
              variant='outlined'
              aria-required
            />
          </div>
        </div>
        <div className='form-items1'>
          <label className='label1' htmlFor='email'>
            <b>Email:</b>
          </label>
          <label className='label1' htmlFor='phone'>
            <b>Phone Number:</b>
          </label>
        </div>
        <div className='form-items1'>
          <div className='label1'>
            <TextField
              className='text1'
              id='email'
              value={user.email}
              onChange={handleChange}
              label='Email'
              type='email'
              variant='outlined'
            />
          </div>
          <div className='label1'>
            <TextField
              className='text1'
              id='phoneNumber'
              value={user.phoneNumber}
              onChange={handleChange}
              label='Phone Number'
              variant='outlined'
              aria-required
            />
          </div>
        </div>
        <div className='form-items1'>
          <label className='label1' htmlFor='password'>
            <b>Password:</b>
          </label>
          <label className='label1' htmlFor='cpassword'>
            <b>Confirm Password:</b>
          </label>
        </div>
        <div className='form-items1'>
          <div className='label1'>
            <TextField
              className='text1'
              id='password'
              value={user.password}
              onChange={handleChange}
              label='Password'
              type='password'
              variant='outlined'
            />
          </div>
          <div className='label1'>
            <TextField
              className='text1'
              id='cpassword'
              label='Confirm Password'
              type='password'
              variant='outlined'
              aria-required
            />
          </div>
        </div>
        <div className='form-items1'>
          <label className='label1' htmlFor='gender'>
            <b>Gender:</b>
          </label>
        </div>
        <div className='form-items1'>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby='demo-row-radio-buttons-group-label'
              name='gender'
              value={user.gender}
              onChange={handleGenderChange}
            >
              <FormControlLabel
                value='male'
                control={<Radio />}
                label='Male'
              />
              <FormControlLabel
                sx={{ margin: '0 100px' }}
                value='female'
                control={<Radio />}
                label='Female'
              />
              <FormControlLabel
                className='radio'
                value='other'
                control={<Radio />}
                label='Prefer not to say'
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className='form-items'>
          <Button
            className='Button'
            sx={{
              margin: '50px 10px',
              backgroundColor: 'darkblue',
              transition: '0.2s'
            }}
            variant='contained'
            onClick={handleSubmit}
          >
            REGISTER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
