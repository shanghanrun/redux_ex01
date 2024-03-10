
import {useDispatch, useSelector} from 'react-redux'
import './App.css';
import Box from './component/Box';

function App() {
  const action = useDispatch()
  const count = useSelector(state => state.count)
  const increase=()=>{
    action({type:'increment', payload:{num:5} }) // action 던지기
  }
  const decrease=()=>{
    action({type:'decrement', })
  }
  const login=()=>{
    action({type:'login', payload:{id:'ha' , password: 123 }})
  }

  return (<>
    <div >
      counter : {count}
    </div>
    <button onClick={increase}>증가</button>
    <button onClick={decrease}>감소</button>
    <Box />
    <button onClick={login}>Login</button>
  </>
  );
}

export default App;
