import { useState } from "react"
import {Navigate} from "react-router-dom"

const Register = ({data,setData})=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] =  useState("")
    const [emailError,setemailError] = useState("")
    const [passwordError,setpasswordError] = useState("")
    const [registered,setRegistered] = useState(false)
    const [already,setAlready] = useState(false)
    const emailRegister = (value)=>{
        setEmail(value)
    }
    const passwordRegister = (value)=>{
            setPassword(value)
    }
    const search = ()=>{
         for(let i = 0; i<data.length; i++)
           {
               if(data[i].email === email)
               {
                   return true
               }
           }
           return false
        }
    const handleRegister = (e)=>{
        e.preventDefault()
        let emailRegex = /^([a-z 0-9]+)@([a-z 0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/g
        let passwordRegex = /^[A-Z][a-z]{2,10}(@|#|\$)\d{2,4}/g
       if(email.match(emailRegex) && password.match(passwordRegex))
       {
           if(search())
           {
                setAlready("you already registered")
           }
           else
           {
            setData([...data,{email,password}])
            console.log("logined successfully")
            setEmail("")
            setPassword("")
            setemailError("")
            setpasswordError("")
            already("")
            setRegistered(true)
           }
       }
       else if(email.match(emailRegex) === null || password.match(passwordRegex === null))
       {
            if(email.match(emailRegex) == null)
            {
                setemailError("please enter a valid emial")
            }
            else
            {
                setemailError("")
            }
            if(password.match(passwordRegex) == null)
            {
                setpasswordError("please enter a password")
            }
            else
            {
                setpasswordError("")
            }
       }
    }
  
    return (
        <section className = "Register">
            <h1>Register</h1>
        <form>
            <input 
            onChange={(e)=>emailRegister(e.target.value)}
            type = "text"
            placeholder="Enter your email"
            value = {email}/>
            {emailError && <p>{emailError}</p>}
            <input 
            onChange = {(e)=>passwordRegister(e.target.value)} 
            type = "text"
            placeholder="Enter a password"
            value = {password}/>
            {passwordError && <p>{passwordError}</p>}
            <button type = "submit" onClick = {(e)=>handleRegister(e)}>Register</button>
            {already && <h3>{already}</h3>}
            {registered && <Navigate to = "/"/>}
        </form>
        <div className = "rule">
            <h3>Rule for password</h3>
            <div>
                    <p>- initial letter must be in capital</p>
                    <p>- between 2 to 10 character after capital letter</p>
                    <p>- one of the special character from @ ,#, $</p>
                    <p>- digits ,but digit count must be 2 to 4</p>
                    <p>- example : Attwtttt@129</p>
            </div>
        </div>
        </section>
    )
}
export default Register;