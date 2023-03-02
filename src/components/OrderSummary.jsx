import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export default function OrderSummary() {

  const navigation = useNavigate();


  return (
    <div>
      <div>orderSummary</div>
      <Button variant="contained" disableElevation onClick={() => navigation(-1)}>back</Button>
    </div>
  )
}
