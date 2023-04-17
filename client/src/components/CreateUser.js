import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateUser = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [room, setroom] = useState({
    
    Name: '',
    maxcount: '',
    phonenumber: '',
    rentperday: '',
    type: '',
    description: '',
  });

  const onChange = (e) => {
    setroom({ ...room, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://5000-meipsita-rentalmgmt-1b6kz4strjb.ws-us94.gitpod.io/api/rooms', room)
      .then((res) => {
        setroom({
          
            name: '',
            maxcount: '',
            phonenumber: '',
            rentperday: '',
            type: '',
            description: '',
          
        });

        // Push to /
        navigate('/show-list');
      })
      .catch((err) => {
        console.log('Error in CreateUser!');
        console.log('The error is -> ')
        console.log(err)
      });
  };

  return (
    <div className='CreateUser'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/show-list' className='btn btn-outline-dark float-left'>
              Show Room List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add user</h1>
            <p className='lead text-center'>Create new user</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='name'
                  name='name'
                  className='form-control'
                  value={room.name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='maxcount'
                  name='maxcount'
                  className='form-control'
                  value={room.maxcount}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='phone'
                  name='phonenumber'
                  className='form-control'
                  value={room.phonenumber}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='room rent'
                  name='rentperday'
                  className='form-control'
                  value={room.rentperday}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='type'
                  name='type'
                  className='form-control'
                  value={room.type}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='description of this room'
                  name='description'
                  className='form-control'
                  value={room.description}
                  onChange={onChange}
                />
              </div>
              {/* <div className='form-group'>
                <input
                  type='text'
                  placeholder='image of this room'
                  name='image'
                  className='form-control'
                  value={room.image}
                  onChange={onChange}
                />
              </div> */}

              <input
                type='Submit'
                className='btn btn-outline-dark btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;