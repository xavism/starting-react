import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCoin } from "../redux/coins/actions";

function ListCoins() {
  const dispatch = useDispatch()
  const { storedCoins, availableCoins} = useSelector(state => state.coins)
  const handleRemove = coin => {
    debugger
    dispatch(removeCoin(coin))
  }
  const getUSDPrice = (coin) => {
    let price = availableCoins[coin]
    return price || '-' 
  }
  // console.log('In')
  return (
    <div className="list-coins mt-10 flex">
      <ul className="mx-auto">
        {storedCoins.map(coin => <li onClick={() => handleRemove(coin)} className="cursor-pointer hover:bg-red-200 px-5 py-2 rounded shadow-md bg-gray-100 my-2" key={coin}>1 USD = <span>{getUSDPrice(coin)}</span> {coin}</li>)}
      </ul>
    </div>
  );
}

export default ListCoins;
