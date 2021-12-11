import { useState } from "react"

const Login = ({data,loggedin,setLoggedin})=>{
    const [loginEmail,setloginEmail] = useState("")
    const [loginPassword,setloginPassword] = useState("")
    const [emailError,setemailError] = useState("")
    const [passworderror,setpasswordError] = useState("")
    const [register,setRegister] = useState(false)
    const handleLogin = (e)=>{
        e.preventDefault()
        let emailRegex = /^([a-z 0-9]+)@([a-z 0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/g
        let passwordRegex = /^[A-Z][a-z]{2,10}(@|#|\$)\d{2,4}/g
         if(loginEmail.match(emailRegex) && loginPassword.match(passwordRegex))
       {
           console.log("logged in")
           setloginEmail("")
           setloginPassword("")
           setemailError("")
           setpasswordError("")
           if(data.length === 0)
           {
               setRegister(true)
           }
           else
           {
                for(let i = 0; i<data.length; i++)
                {
                    if(data[i].email === loginEmail && data[i].password === loginPassword)
                    {
                        console.log("logged in")
                        setLoggedin(true)
                    }
                    else
                    {
                        console.log("please register")
                            setRegister(true)
                    }
                }
        }
       }
       else if(loginEmail.match(emailRegex) === null || loginPassword.match(passwordRegex) === null)
       {
           console.log("not logged in")
            if(loginEmail.match(emailRegex) == null)
            {
                setemailError("please enter a valid emial")
            }
            else
            {
                setemailError("")
            }
            if(loginPassword.match(passwordRegex) == null)
            {
                setpasswordError("please enter a password")
            }
            else
            {
                setpasswordError("")
            }
       }
    }
    const emailLogin = (value)=>{
        setloginEmail(value)
    }
    const passwordLogin = (value)=>{
        setloginPassword(value)
    }
    return (
        <section className="Login">
            <h1>Login</h1>
        <form>
                <input 
                onChange = {(e)=>emailLogin(e.target.value)} 
                type = "email"
                placeholder="Enter your email"
                value = {loginEmail}/>
                {emailError && <p>{emailError}</p>}
                <input 
                onChange = {(e)=>passwordLogin(e.target.value)} 
                type = "password"
                placeholder="Enter a password"
                value = {loginPassword}/>
                {passworderror && <p>{passworderror}</p>}
                <button type = "submit" onClick = {(e)=>handleLogin(e)}>Login</button>
                {register && <h3>first register yourself</h3>}
            </form>
        </section>
    )
}

export default Login;