import React from 'react'
import { Outlet,Link} from 'react-router-dom'

export default function Users() {
  return (
    <div>
        <Link to='1'>user 1</Link>
        <Link to='2'>user 2</Link>
        <Link to='3'>user 3</Link>
        <Outlet />
    </div>
  
  )}
