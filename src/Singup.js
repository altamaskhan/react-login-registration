
import React from 'react'
import { useForm } from "react-hook-form";

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) =>{
         console.log(data);
         alert("registration success")
         window.location = '/login';
    localStorage.setItem('user-data',JSON.stringify(data))
    }
    
    return (
        <>
            
            <div className="col-sm-4 offset-sm-4 mt-5">
                <div className="card shadow">
                    <div className="container">

                        <h1  className="text-center text-primary">SignUp</h1><br />
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="text-danger">
                               {errors.username?.type === 'required' && "name is required"}
                               {errors.username?.type === 'minLength' && "minimum length is 3"}
                               {errors.username?.type === 'maxLength' && "maximum length is 15"}
                               {errors.username?.type === 'pattern' && "invailid name"}
                               
                           </p>

                            <input
                                className="form-control"
                                name="username"
                                {...register('username', { required: true, minLength:4, maxLength:15, pattern: /^[A-Za-z ]+$/i })}
                                placeholder="enter your name"
                                type="text"
                                
                                
                            />
                            <br />
                            
                            <p className="text-danger">
                               {errors.number?.type === 'required' && "number is required"}
                               {errors.number?.type === 'minLength' && "number should be 10 digit"}
                               {errors.number?.type === 'maxLength' && "number should be 10 digit"}
                           </p>
                            <input
                                className="form-control"
                                name="number"
                                {...register('number', { required: true, minLength:10, maxLength:10 })}
                                placeholder="enter you number"
                                type="number"
                               
                            />
                            <br />





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

export default  Signup