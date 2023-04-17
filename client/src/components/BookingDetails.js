import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const BookingDetails = (props) => {
  const room = props.room

  return (
    <div className='card-container'>
      <img 
      src='https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill'
        alt='Rooms'
        height={220}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-room/${room._id}`}>
            {room.name}
          </Link>
        </h2>
        <h3 className='text-danger'>{room.phonenumber}</h3>
        <p>{room.description}</p>
      </div>
    </div>
  )
}

export default BookingDetails;