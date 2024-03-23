import React from 'react'
import { useState,useEffect } from 'react'
import Item from '../components/Item';
import Navbar from '../components/Navbar';

function DeliveryPartner(){
    const [data,setData] = useState([])
    const api ="";
    useEffect(()=>{
        async function getData(){
            try{
                const res = await fetch(api);
                const output = res.json();
                setData(output);
            }
            catch(error){
                console.error(error);
            }
        }
    })
  return (
    <div>
        <Navbar/>
        {/* {data.length > 0 ? (data.map((dataitem) =>{<Item dataitem={dataitem}/>})):(<p>No item pending</p>)} */}
        <Item/>
    </div>
  )
}

export default DeliveryPartner