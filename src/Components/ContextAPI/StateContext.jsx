import React from 'react'
import { useState } from 'react'
import { Context } from './Context'

function StateContext({children}) {
    let [user,setUser]=useState({username:localStorage.getItem('username')?localStorage.getItem('username'):''})

  return (
    <Context.Provider value={{user,setUser}}>
        {children}
    </Context.Provider>
  )
}

export default StateContext