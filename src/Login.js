import React, { useState } from 'react'
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) =>{
        if (data.email == "alam@gmail.com" && data.password=="alam"){
           
            alert("Successfully Loged in!");
            window.location = '/';
           
          }
          else {
            alert("login fail!");
          }
        
        console.log(data);

    }

    return (
        <>
            
            <div className="col-sm-4 offset-sm-4 mt-5">
                <div className="card shadow">
                    <div className="container">

                        <h1 className="text-center text-primary">Login</h1><br />
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="text-danger">
                               {errors.email?.type === 'required' && "email is required"}
                               
                               {errors.email?.type === 'pattern' && "invalid email"}
                               
                           </p>

                            <input
                                className="form-control"
                                name="email"
                                {...register('email', { required: true, pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+/, })}
                                placeholder="enter email id "
                                type="text"
                                
                                
                            />
                            <br />
                            
                            <p className="text-danger">
                               {errors.password?.type === 'required' && "password is required"}
                               {errors.password?.type === 'minLength' && "minimum length is 3"}
                               {errors.password?.type === 'maxLength' && "maximum length is 10"}
                           </p>
                            <input
                                className="form-control"
                                name="password"
                                {...register('password', { required: true, minLength:3, maxLength:10 })}
                                placeholder="password "
                                type="password"
                               
                            />
                            <br />

                            <div className="d-grid gap-2">
                                <button className="btn btn-primary mb-2" >Log In </button>
                            </div>
                        </form>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Login