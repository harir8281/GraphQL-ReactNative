import React from 'react'
import './style/DeleteUser.css'

// import { DELETE_USER_MUTATIONS } from '../graphql/graphql'
import { useMutation } from '@apollo/client'

function DeleteUser() {
  // const[deleteUser]=useMutation(DELETE_USER_MUTATIONS)
  return (
    <div className='delete-user-container'>UpdateUsername

    <div className='delete-user-input-container'>
        <input className='delete-update-input' placeholder='user-id'/>
        <button>delete</button>
    </div>

    </div>
  )
}

export default DeleteUser