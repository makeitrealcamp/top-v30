import React,  { useEffect, useState } from 'react'
import Router from 'next/router'

const authenticatedRoute = (Component = null, options = {}) => {

  const AuthenticatedRoute = (props) => {
    const isLoggedIn = true// cookies, localstorage, etc
    const [ loading, setLoading ] = useState(true)
    
    useEffect(() => {
      if(isLoggedIn) {
        setLoading(false)
      } else {
        Router.replace(options.pathAfterFailure || '/')
      }
    }, [])
    
    if(loading) {
      return <div>Loading...</div>
    }
    
    return <Component {...props} />
  }

  return AuthenticatedRoute
}

export default authenticatedRoute