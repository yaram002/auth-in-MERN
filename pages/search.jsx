import '../css/ser.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Ser() {
  const [datas, setDatas] = useState([]);
  const [name, setname] = useState('');


  let handlech = (e) => {
    setname(e.target.value)

  }


  const SendData = async (e) => {
    e.preventDefault();
    setname('')
    try {
      const response = await axios.post('http://localhost:3001/one', { name });
      setDatas(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  return (
    <div>
      <Link to="/">homepage</Link>
      <div className="container">
        <h1>Search Database</h1>
        <form onSubmit={SendData}>
          <label htmlFor="search-term">Search Term:</label>
          <input type="text" id="search-term" name="name" value={name} onChange={handlech} placeholder="Enter your search term" />
          <button type="submit">Search</button>
        </form>

        
      </div>

      <div id="search-results">
        <Card style={{ width: '18rem' }}>
          {datas.map(data => (
            <div key={data._id}>
              <p>Name: {data.name}</p>
              <p>Username: {data.uname}</p>
              <p>City: {data.city}</p>

            </div>

          ))}
        </Card> </div>

    </div>
  );
}

export default Ser;
