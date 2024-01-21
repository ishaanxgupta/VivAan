import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function Item({dataItem}) {
    const [boolstatus,setboolstatus] = useState(false);
    const [status,setStatus] = useState("Not delivered")
    function togglebtn(boolstatus){
        if(boolstatus === true){
            setStatus("Delivered")
        }
        else{
            setStatus("Not delivered")
        }
        setboolstatus(!boolstatus);
    }
    function addClasses(){
       // cancelbtn.classList.addClasses("opacity-1")
    }   
    return (
    <div className='flex justify-between mx-4 mt-3 border-[1px] h-[70px] px-3 py-4' onClick={addClasses}>
        <div className='flex flex-col'>
            <div className='flex'>
                <div>Order ID</div>
                <div>Order name</div>
            </div>
            <div className='flex'>
                <button className='opacity-0 cancelbtn'>Cancel order</button>
                <button className='opacity-0 delbtn'>Send for delivery</button>
            </div>
        </div>
        <NavLink>More details</NavLink>
        <button className='w-[100px]' onClick={()=>{togglebtn(boolstatus)}}>{status}</button>
        <div></div>
    </div>
  )
}

export default Item