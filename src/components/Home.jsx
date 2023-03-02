import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigation = useNavigate();
  return (
    <div>
    <div>home</div>
    <Button variant="contained" disableElevation onClick={()=>navigation("/order-summary")}>Place Order</Button>
    </div>
  )
}
