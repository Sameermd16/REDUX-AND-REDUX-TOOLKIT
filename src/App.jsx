
import { useDispatch } from 'react-redux'
import './App.css'
import { ordered, restocked } from './features/cake/cakeSlice'
import { store } from './store'
import { ordersPlaced } from './features/icecream/icecreamSlice'
import { fetchUsers } from './features/users/userSlice'


function App() {

  const dispatch = useDispatch()
  console.log('initial state', store.getState())
  const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
  
  // store.dispatch(ordered())
  // store.dispatch(ordered())
  // store.dispatch(restocked(3))
  // store.dispatch(restocked(2)) 
  // store.dispatch(ordersPlaced())
  store.dispatch(fetchUsers())
  unsubscribe()

  return (
    <>
      rtk demo
    </>
  )
}

export default App
