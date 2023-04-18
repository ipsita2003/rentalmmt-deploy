import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateRoom(props) {
  const [room, setRoom] = useState({
    name: '',
    maxcount: '',
    phonenumber: '',
    rentperday: '',
    type: '',
    description: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
    .get(`/api/rooms/${id}`)
      .then((res) => {
        setRoom({
          name: res.data.name,
          maxcount: res.data.maxcount,
          phonenumber: res.data.phonenumber,
          rentperday: res.data.rentperday,
          type: res.data.type,
          description: res.data.description,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateRoom GET request');
        console.log(err)
      });
  }, [id]);

  const onChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
        name: room.name,
        maxcount: room.maxcount,
        phonenumber: room.phonenumber,
        rentperday: room.rentperday,
        type: room.type,
        description: room.description,
        
      };

      axios
      .put(`/api/rooms/${id}`, data)
      .then((res) => {
        navigate(`/show-room/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateRoom PUT request ->');
        console.log(err)
      });
  };

  return (
    <div className='UpdateRoom'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-dark float-left'>
              Show Room List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Room</h1>
            <p className='lead text-center'>Update Room's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                placeholder='Name of the a Room'
                name='name'
                className='form-control'
                value={room.name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='maxcount'>maxcount</label>
              <input
                type='number'
                placeholder='maxcount'
                name='maxcount'
                className='form-control'
                value={room.maxcount}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='phonenumber'>phonenumber</label>
              <input
                type='number'
                placeholder='number'
                name='phonenumber'
                className='form-control'
                value={room.phonenumber}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='rent'>Rentperday</label>
              <textarea
                type='number'
                placeholder='rent of the room '
                name='rentperday'
                className='form-control'
                value={room.rentperday}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='type'>Type</label>
              <input
                type='text'
                placeholder='room'
                name='type'
                className='form-control'
                value={room.type}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <input
                type='text'
                placeholder='Description of the Room'
                name='description'
                className='form-control'
                value={room.description}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              UpdateRoom
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateRoom;
