import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { endPoint } from './data'
function Register() {
let [msg,setMsg]=useState({text:'',variant:''})
let [userData,setUserData]=useState({name:'',password:'',username:''})
let navigate=useNavigate()
async function  sendData() {
    
}  
async function handleSubmit(e)
  {
    e.preventDefault()
    if(userData.username=='')
    {
        setMsg({text:"username is required",variant:"error"})
        return
    }
    if(userData.username.length<8)
        {
            setMsg({text:"username must have minimum 8 character",variant:"error"})
            return
        }
    if(userData.password=='')
        {
            setMsg({text:"password is required",variant:"error"})
            return
        }
        if(userData.password.length<8)
            {
                setMsg({text:"password must have minimum 8 characters",variant:"error"})
                return
            }
    if(userData.name=='')
    {
        setMsg({text:"name is required",variant:"error"})
        return
    }
  //e.prevetDefault();
  let payload={username:userData.username,
    password:userData.password,
    name:userData.name
   }
  try{
  let res=await fetch(`${endPoint}/user/register`,{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify(payload)
  })
  
  let data=await res.json()
  if(!res.ok)
    {
      setMsg({text:data.msg,variant:"error"})
    }
    else{
        setMsg({text:data.msg,variant:"success"})
        setTimeout(()=>{
          navigate("/login")
        },[1000])
    }
  }
  catch(e)
  {
  console.log(e)
  }
   

  }
  function handleChange(e)
  {
   setUserData((prev)=>{return {...prev,[e.target.name]:e.target.value}})
  }
    return (
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[500px] w-full rounded-lg shadow-lg  border px-5 py-5 text-center' >
        <p className='text-blue-500 text-lg'>Register</p>
        <form className='flex flex-col gap-4 px-5 py-5 ' onSubmit={handleSubmit}>
        <input type='text' className='px-4 py-2 outline-none hover:ring-indigo-600 hover:ring-2 border' placeholder='enter your name'  name="name" value={userData.name} onChange={handleChange}/>
        <input type='text' className='px-4 py-2 outline-none hover:ring-indigo-600 hover:ring-2 border' placeholder='enter user name' name="username" value={userData.username} onChange={handleChange}/>
        <input type='password' className='px-4 py-2 outline-none focus-within:ring-indigo-600 focus-within:ring-2 border'  placeholder='enter password' name="password" value={userData.password} onChange={handleChange}/>
        <button  className='bg-blue-600 hover:bg-blue-800 text-white rounded-md transition-all duration-150 px-4 py-2' >Register</button>
        </form>
         <div className="text-sm"style={{color:msg.variant=="error"?"red":"green"}}>{msg.text}</div>
    </div>
  )
}

export default Register