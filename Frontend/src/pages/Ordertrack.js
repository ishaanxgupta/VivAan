import React from 'react'
import Stock from '../components/Stock'
import DeliveryExecutive from '../components/DeliveryExecutive'

function Ordertrack() {
  const sendOrdersToDeliveryAgent = (deliveryAgentId) => {
    // Implement logic to send orders to the specified delivery agent
    // This could involve making an API call to your backend
    console.log('Sending orders to delivery agent with ID:', deliveryAgentId);
    // Example API call:
    // fetch('/api/send-orders', {
    //   method: 'POST',
    //   body: JSON.stringify({ deliveryAgentId, orders }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error('Failed to send orders to delivery agent');
    //   }
    //   // Handle success
    // })
    // .catch(error => {
    //   console.error('Error sending orders to delivery agent:', error);
    // });
  };
  return (
 <>
 <div className="flex justify-end py-4">
      <div className="w-1/5">
 <Stock/>
 </div>
 </div>
<br/><br/><br/>
 <div className="flex justify-end">
      <div className="w-1/3 m-8 p-8"> 
<DeliveryExecutive
 id="123"
 name="John Doe"
 details="Some details about the delivery executive"
 onClickSend={sendOrdersToDeliveryAgent}/>
 </div>
 </div>
 
 </>

  
  )
}

export default Ordertrack