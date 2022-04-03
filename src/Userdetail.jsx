import React , {useState} from 'react';

const Userdetail = () => {
  
  const tempdata = [
    {id:1 , name:'Mandar' , amount:400},
    {id:1 , name:'Rahul' , amount:400},
    {id:1 , name:'Aditya' , amount:400},
    {id:1 , name:'Omkar' , amount:400},
    {id:1 , name:'Indra' , amount:400},
  ]

  const renderdata = tempdata.map((item) => (
    <div className='user-wrapper'>
      <div className='userdata-container'>
        <span>{item.name}</span>
        <button>Add amount</button>
      </div>
    </div>
  ));

  const renderstats = tempdata.map((item)=> (
    <div className='stats-wrapper'>
      <div className='stats-detail'>
        <span>{item.name}</span>
        <span>Total amount : ${item.amount}</span>
      </div>
    </div>
  ));

  return(
    <div className='wrapper'>
      <button>Add people</button>
      <div className='container'>
        <div>{renderdata}</div>
        <div className='stats-container'>{renderstats}</div>
      </div>
    </div>
  )
}

export default Userdetail;