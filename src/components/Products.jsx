import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link, Outlet } from 'react-router-dom';


export default function Products() {
    return (
        <div>
            <Box
                className='m-8'
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="research products" variant="filled" />
            </Box>
            <nav className="flex sm:justify-center space-x-4 bg-slate-500 ">
                <Link className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" to="feature">Featured</Link>
                <Link className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" to="new">New</Link>
            </nav>
            <Outlet />
        </div>
    )
}
