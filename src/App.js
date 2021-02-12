// import CoinbaseService from './services/coinbaseService';
import AddCoins from './components/AddCoins'
import ListCoins from './components/ListCoins'
import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { getCoins } from './redux/coins/middlewares';

function App() {
  // let service = new CoinbaseService();
  // service.getRates('USD')
  // console.log('In')
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCoins())
  }, [])
  return (
    <div className="App mt-20 cointainer mx-auto text-center">
      <AddCoins />
      <ListCoins />
    </div>
  );
}

export default App;
