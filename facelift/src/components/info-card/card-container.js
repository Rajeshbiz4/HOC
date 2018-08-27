import React from 'react'
import Card from './card'
import isContainer from '../../HOC/isContainer'
import isList from '../../HOC/isList'
import { compose } from 'redux'

const UserDefault = () => <div  className="no-users">No users to display.</div>

const Dash =  compose(
    isContainer({
      data: {
        url: 'https://jsonplaceholder.typicode.com/users', 
        params: {
          page: 1,
          _limit: 10
        },
        loadingMessage: "Loading Users..."
      },
      DefaultComponent: UserDefault
    }),
    isList('users')
  )(Card)

  const Dash1 =  compose(
    isContainer({
      data: {
        url: 'https://jsonplaceholder.typicode.com/users', 
        params: {
          page: 1,
          _limit: 10
        },
        loadingMessage: "Loading Users..."
      },
      DefaultComponent: UserDefault
    }),
    isList('users')
  )(Card)

const Users = props => (
  <div className="users-page" style={{'display':'flex'}}>
     <Dash></Dash>
     <Dash1></Dash1>
     <Dash1></Dash1>
     <Dash1></Dash1>
     <Dash></Dash>
  </div>
)

export default Users

// export default compose(
//   isContainer({
//     data: {
//       url: 'https://jsonplaceholder.typicode.com/users', 
//       params: {
//         page: 1,
//         _limit: 10
//       },
//       loadingMessage: "Loading Users..."
//     },
//     DefaultComponent: UserDefault
//   }),
//   isList('users')
// )(Card)