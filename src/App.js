
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {

  const dispath = useDispatch();
  const cash = useSelector(state => state.cash);
  console.log(cash);
  return (
    <>
      <p>{cash}</p>
    </>
  );
}

export default App;
