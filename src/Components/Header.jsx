import React from 'react'
import { Link } from 'react-router-dom'
import { Context } from './ContextAPI/Context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
function Header() {
    let cont=useContext(Context)
    let navigate=useNavigate()
  return (
    <div className='bg-gray-200 h-[70px]  '>
        <div className='flex items-center justify-between h-full px-10'>
            <p className='text-2xl font-bold'>RBAC</p>
            <div className='flex items-center justify-end gap-20'>
            {!cont.user.username &&<Link className='text-lg font-bold' to="/register" > Register</Link>}
            {!cont.user.username &&<Link className='text-lg font-bold' to="/login" > Login</Link>}
           
            {cont.user.username &&<button className='text-lg font-bold' onClick={()=>{
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            navigate("/login")
          //  window.location.reload()
            //console.log(cont)
            cont.setUser({username:''})
            window.location.reload()
            }}> Logout</button>}
             {cont.user.username &&<p className='text-lg font-bold'  > {cont.user.username}</p>}
            </div>
        </div>
    </div>
  )
}

export default Header