
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { ordered, restocked } from './features/cake/cakeSlice'
import { store } from './store'
import { ordersPlaced } from './features/icecream/icecreamSlice'
import { fetchUsers } from './features/users/userSlice'
import { useEffect, useState } from 'react'


function App() {

  const [value, setValue] = useState('')
  const numOfCakes = useSelector((store) => store.cakeReducer.numOfCakes)
  console.log(numOfCakes)
  const numOfIcecreams = useSelector((store) => store.icecreamReducer.numOfIcecreams)
  console.log(numOfIcecreams)
  const dispatch = useDispatch()
  const userState = useSelector((store) => store.userReducer)
  console.log(userState)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  // console.log('initial state', store.getState())
  // const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
  
  // // store.dispatch(ordered())
  // // store.dispatch(ordered())
  // // store.dispatch(restocked(3))
  // // store.dispatch(restocked(2)) 
  // // store.dispatch(ordersPlaced())
  // store.dispatch(fetchUsers())
  // unsubscribe()

  return (
    <>
      <div>
        <p>Number of cakes: {numOfCakes} </p>
        <button onClick={() => dispatch(ordered())}>order cake</button>
        <input type="text" value={value} onChange={(e) => setValue(Number(e.target.value))} />
        <button onClick={() => dispatch(restocked(value))}>restock cake</button>
      </div>
      <div>
        <p>Number of icecreams: {numOfIcecreams} </p>
        <button onClick={() => dispatch(ordersPlaced())}>order icecream</button>
      </div>
      <div>
        {userState.loading && <h1>Loading...</h1>}
        {!userState.loading && userState.error ? <div> Error: {userState.error} </div> : null}
        <ul>
          {
            userState.users.map((item) => {
              return <li key={item.id}> {item.name} </li>
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
