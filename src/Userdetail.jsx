import React , {useState} from 'react';
import Modal from 'react-modal';

const Userdetail = () => {

  const [show , setShow] = useState(false);
  const [names , setNames] = useState([]);
  const [username , setUsername] = useState();

  
  const tempdata = [
    {id:1 , name:'Mandar' , amount:400},
    {id:1 , name:'Rahul' , amount:400},
    {id:1 , name:'Aditya' , amount:400},
    {id:1 , name:'Omkar' , amount:400},
    {id:1 , name:'Indra' , amount:400},
  ]

  const renderdata = names.map((item) => (
    <div className='user-wrapper'>
      <div className='userdata-container'>
        <span>{item.name}</span>
        <button>Add amount</button>
      </div>
    </div>
  ));

  const renderstats = names.map((item)=> (
    <div className='stats-wrapper'>
      <div className='stats-detail'>
        <span>{item.name}</span>
        <span>Total amount : ${item.amount}</span>
      </div>
    </div>
  ));

  const handlesubmit = (e) => {
    e.preventDefault();
    const newUser = {id:Math.random() , name:username , amount:400}
    setNames([...names , newUser]);
    setShow(false);
    setUsername('')
  }



  const handleusernamechange = (e) => {
    setUsername(e.target.value);
  }


  return(
    <div className='wrapper'>
      <button onClick={() => setShow(true)}>Add people</button>
      <Modal className='modal' isOpen={show}>
        <div className='modal-container'>
          <form>
            <div className='image-container'>
              <img onClick = {() => setShow(false)} src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-close-web-flaticons-flat-flat-icons-4.png"/>
            </div>
            <div className='input-container'>
              <p>Add a friend</p>
              <input value={username} type="text" onChange={handleusernamechange}/>
            </div>
          </form>
          <div className='button-container'>
            <button type='Submit' onClick = {handlesubmit}>Submit</button>
          </div>
        </div>
      </Modal>
      <div className='container'>
        <div>{renderdata}</div>
        <div className='stats-container'>{renderstats}</div>
      </div>
    </div>
  )
}

export default Userdetail;