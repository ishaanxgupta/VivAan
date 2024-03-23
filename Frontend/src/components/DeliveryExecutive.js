import React from 'react';

const DeliveryExecutive = ({ id, name, details, onClickSend }) => {
  const handleSend = () => {
    // Here you can call the function to send orders to this delivery executive
    onClickSend(id);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h2 className="text-lg font-bold mb-2">Delivery Executive Details</h2>
      <div>
        <p><span className="font-bold">ID:</span> {id}</p>
        <p><span className="font-bold">Name:</span> {name}</p>
        <p><span className="font-bold">Details:</span> {details}</p>
      </div>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSend}>
        Send to this Delivery Agent
      </button>
    </div>
  );
};

export default DeliveryExecutive;
