import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoin } from "../redux/coins/actions";

const AddTodo = () => {
  const dispatch = useDispatch()
  const [select, setSelect] = useState('')
  const { availableCoins } = useSelector(state => state.coins)
  console.log(availableCoins)
  const updateSelect= select => {
    setSelect(select)
  };

  const handleAddCoin = () => {
    console.log(addCoin)
    dispatch(addCoin(select))
  };

    return (
      <div>
        {/* <input
          onChange={e => updateInput(e.target.value)}
          value={input}
        /> */}
        <select onChange={e => updateSelect(e.target.value)} name="coin" id="coins" className="rounded bg-blue-100 shadow h-8 px-5">
          { Object.keys(availableCoins).map(coin => {
            return <option key={coin} value={coin}>{coin}</option>
          })}
        </select>
        <button className="rounded h-8 px-5 ml-5 bg-blue-200" onClick={handleAddCoin}>
          Add Coin
        </button>
      </div>
    );
  }

export default AddTodo
// export default AddTodo;
