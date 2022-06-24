import Swal from 'sweetalert2';
import React, { useState } from 'react';
import { loginUser } from '../../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
      });
    
      const navigation = useNavigate();
    
      const submitHandler = async () => {
        const res = await loginUser(form);
    
        if (res === "success") {
          Swal.fire({
            icon: "success",
            title: "Login Success!",
            text: `You've logged in to your acoount!`,
          })
          navigation('/home');
          window.location.reload();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops....",
            text: `Login Failed!`,
            footer:
              "Your Email or Password is Wrong! Please try again!",
          });
        }
      }

    return(
        <div className='row my-3'>
        <div className='w-100 text-center'>
          <h1>Login Form</h1>
        </div>
        <div className='w-50 mx-auto'>
          <hr />
          <div className='mb-3'>
            <label>E-mail :</label>
            <input className='form-control' type='text' placeholder='Username' 
            onChange={ (e) => setForm({...form, email: e.target.value}) } 
            />
          </div>

          <div className='mb-3'>
            <label>Password :</label>
            <input className='form-control' type='password' placeholder='Password' 
            onChange={ (e) => setForm({...form, password: e.target.value}) } 
            />
          </div>

          <div className='submit-btn'>
            <button className='btn text-add' 
            onClick={submitHandler} 
            ><strong>Login</strong></button>
          </div>

          <div className='container text-center'>
                <p>Don't have an account ? <a href='/register'>Register</a></p>
          </div>
        </div>
      </div>
    )
}
export default LoginPage