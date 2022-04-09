import React , {useState} from 'react';
import Modal from 'react-modal';
import { v4 as uuid } from 'uuid';

const Userdetail = () => {

  const [showAddPeople , setShowAddPeople] = useState(false);
  const [showAddAmount , setShowAddAmount] = useState(false);
  const [userDetails , setUserDetails] = useState([]);
  const [username , setUsername] = useState();
  const [amount , setAmount] = useState('');

  
 
  const handleUserAmountChange = (e) => {
    setAmount(e.target.value);
  }

  const handleUserAmountSubmit = (e) => {
    e.preventDefault();

  }

  const handleusernamechange = (e) => {
    setUsername(e.target.value);
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    const unique_id = uuid();
    console.log(unique_id);
    const newUser = {id:unique_id , userName:username , userAmount:amount}
    setUserDetails([...userDetails , newUser]);
    setShowAddPeople(false);
    setUsername('')
  }

  const renderdata = userDetails.map((item) => (
    <div className='user-wrapper'>
      <div className='userdata-container'>
        <span>{item.userName}</span>
        <button onClick={() => setShowAddAmount(true)}>Add amount</button>
        <Modal className='modal' isOpen={showAddAmount}>
          <div className='modal-container'>
          <form>
            <div className='image-container'>
              <img onClick = {() => setShowAddAmount(false)} src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-close-web-flaticons-flat-flat-icons-4.png"/>
            </div>
            <div className='input-container'>
              <p>Add amount</p>
              <input value={amount} type="number" onChange={handleUserAmountChange}/>
            </div>
          </form>
          <div className='button-container'>
            <button type='Submit' onClick = {(e) => {
              e.preventDefault();
              item.userAmount = Number(item.userAmount) + Number(amount);
              setShowAddAmount(false);
              setAmount('');
            }}>Submit</button>
          </div>
          </div>
        </Modal>
      </div>
    </div>
  ));

  const renderstats = 
  userDetails.map((item)=> (
    <div className='stats-wrapper'>
      <div className='stats-detail'>
        <span>{item.userName}</span>
        {item.userAmount === '' ? <span>Total amount : $0</span> : <span>Total amount : ${item.userAmount}</span>}
      </div>
    </div>
  ));

  

  return(
    <div className='wrapper'>
      <button onClick={() => setShowAddPeople(true)}>Add people</button>
      <Modal className='modal' isOpen={showAddPeople}>
        <div className='modal-container'>
          <form>
            <div className='image-container'>
              <img onClick = {() => setShowAddPeople(false)} src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-close-web-flaticons-flat-flat-icons-4.png"/>
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
        {userDetails.length === 0 ? null : <div className='stats-container'>{renderstats}</div>}
      </div>
    </div>
  )
}

export default Userdetail;