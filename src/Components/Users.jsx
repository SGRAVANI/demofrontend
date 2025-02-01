import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from './ContextAPI/Context'
import "./style.css"
import { endPoint } from './data'
function Users() {
    
     let cont=useContext(Context)    
     let navigate=useNavigate()
    let [users,setUsers]=useState([])
     if(!localStorage.getItem('token'))
     {
        navigate("/login")
     }
     console.log(cont)
    async function  getUsers() {
        let token=localStorage.getItem('token')
        try{
           
        let res = await fetch(`${endPoint}/user/data`,
            {
                method:"GET",
                headers:{
                    "Authorization":`${token}`,
                    "Content-type":"application/json"
                
                }
            }
        
        )
        let data=await res.json()
        console.log(data.users)
        setUsers(data.users)
        }
        catch(e)
        {
            console.log("users not found")
        }
        
    }
    useEffect(()=>{
   getUsers()
    },[])
  return (
    <div className='px-10 md:px-20'>users
       <p className='text-center mx-auto mt-5 '> hello , {cont.user.username}</p> 
       <table className='max-w-screen-md my-5 mx-auto w-full border-collapse border border-gray-400 table table-auto [&>*:nth-child(even)]:bg-gray-100 tb-style tb-style '>
        <caption className='caption-top'>
            user details
        </caption>
        <tr className='text-center  ' style={{height:"50px"}}>
            <th className='border-collapse border border-gray-400'>Name</th>
            <th className='border-collapse border border-gray-400'>UserName</th>
        </tr>
        {users.map((ele,id)=><tr className='text-center border' key={`row-${id}`} style={{height:"40px"}}>
            <td key={`uname-${ele.username}`} className='border-collapse border border-gray-400'>{ele.username}</td>
            <td key={`name-${ele.name}`} className='border-collapse border border-gray-400'>{ele.name}</td>
        </tr>)}
        </table>  
         </div>
  )
}

export default Users