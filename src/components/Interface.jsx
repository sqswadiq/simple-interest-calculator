import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'



function Interface() {
  //state
  const[amount,setAmount]=useState("")
  const[rate,setRate]=useState("")
  const[year,setYear]=useState("")
  // console.log(amount,rate,year);

  //state
  const[isInvalidPrinciple,setisInvalidPrinciple]=useState(false)
  const[isInvalidRate,setisInvalidrate]=useState(false)
  const[isInvalidYear,setisInvalidYear]=useState(false)

  //state
  const[simpleInterest,setsimpleInterest]=useState(0)

  const validRegEx=/^[0-9]*.?[0-9]+$/   //regular expression

  const validateInput=(e)=>{
    // console.log(e);

    const{name,value} =e.target // destrecturing

    console.log(name,value);

    if(name=='principle'){
      setAmount(value)
    }
    else if(name=='rate'){
      setRate(value)
    }
    else{
      setYear(value)
    }

    if(validRegEx.test(value) || value=="")
    {
      if(name=='principle'){
        setisInvalidPrinciple(false)
      }
      else if(name=='rate'){
        setisInvalidrate(false)
      }
      else{
        setisInvalidYear(false)
      }
    }
    else{
      if(name=='principle'){
        setisInvalidPrinciple(true)
      }
      else if(name=='rate'){
        setisInvalidrate(true)
      }
      else{
        setisInvalidYear(true)
      }
    }
    

  }

  // calculate function
  const handleCalculate=(e)=>{
    e.preventDefault()  //remove unwanted events

    if(amount && year && rate){
      setsimpleInterest(amount*rate*year/100)
    }
    else{
      alert("PLease Enter The Data")
    }
  }

  // reset button function
  const handleReset=()=>{
    setAmount("")
    setRate("")
    setYear("")
    setsimpleInterest(0)
    setisInvalidPrinciple(false)
    setisInvalidYear(false)
    setisInvalidrate(false)

  }
  return (
    <div className=' d-flex align-items-center justify-content-center ' style={{width:'100%',height:'100vh',background:'rgb(124, 124, 124)'}}>
      <div className='inner-div bg-light rounded p-5' style={{width:'750px',background:'linear-gradient(to bottom,rgb(238, 237, 230), #b2f2bb, #99f6e4)'}}>
        
          <h1>simple interest calculator</h1>
          <span>calculate your simple inerest easily</span>
      

        <div className='text-light bg-dark rounded d-flex flex-column align-items-center mt-3 mb-3 ' style={{height:'150px'}}>
          <h1 style={{fontSize:'50px'}}>₹ {simpleInterest}</h1>
          <h1>Total Simple Interest</h1>
        </div>

        <form action="" className='d-flex flex-column align-items-center'>
        <TextField value={amount || ""} onChange={validateInput} id="principle_amount" name="principle" label="Amount" variant="outlined" className='w-75 mt-2'/>
          {
            isInvalidPrinciple &&
            <p className=' fw-bold text-danger mt-1'>Invalid Principle Amount</p>
          }
        <TextField value={rate || ""}  onChange={validateInput} id="interest_rate" name="rate" label="Rate" variant="outlined" className='w-75 mt-2'/>
          {
            isInvalidRate &&
            <p className='fw-bold text-danger mt-1'>Invalid Rate</p>
          }
        <TextField value={year || ""} onChange={validateInput} id="time_period" name="year" label="Year" variant="outlined" className='w-75 mt-2'/>
          {
            isInvalidYear &&
            <p className='fw-bold text-danger mt-1'>Invalid Year</p>
          }
        <Stack direction="row" spacing={2} className='mt-2'>

          <Button type='submit' onClick={handleCalculate} disabled={isInvalidPrinciple||isInvalidRate||isInvalidYear}  variant="outlined">
          Calculate
          </Button>

          <Button onClick={handleReset} variant="contained">
          Reset
          </Button>
        </Stack>


        </form>
        
      </div>
    </div>
  )
}

export default Interface