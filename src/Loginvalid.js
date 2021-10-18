



import React,{useState} from 'react'

function Login() {
    const[name,setName]=useState("");
    const[pass,setPass]=useState("");

    

    function login()
    {
        if(name && pass ){
            let item={name,pass}
      
        console.log(item)
        // alert(name)
        setName("")
        setPass("")
             
        } 
        else
        {
            alert("please fill the data")
        }
        
    }

    return (
        <>
        <h1>This is log in page......</h1>
        <div className="col-sm-3 offset-sm-5 mt-5">
        <div className="card shadow">
        <div className="container">
        
            <h1 className="text-center">Login</h1><br/>
           
            <input type="email" className="form-control" placeholder="enter email id " value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
            <input type="password" className="form-control" placeholder="enter your password " value={pass} onChange={(e)=>setPass(e.target.value)}></input><br/>

            <div className="d-grid gap-2">
            <button className="btn btn-primary mb-2" onClick={login}>Log In </button>
            </div>
            
        
            
        </div>
        </div>
        </div>
</>
    )
}

export default Login

