import { ADD_COIN, ADD_COIN_LIST, REMOVE_COIN } from "./types"

const initialState = {
  availableCoins: [],
  storedCoins: []
}

export default function reducer(state = initialState, action){
  debugger
  switch (action.type){
  case ADD_COIN:
    return {
      ...state,
      storedCoins: state.storedCoins.includes(action.payload) ? state.storedCoins : [...state.storedCoins, action.payload]
    }
  case ADD_COIN_LIST:
    return {
      ...state,
      availableCoins: action.payload
    }
  case REMOVE_COIN:
    return {
      ...state,
      storedCoins: state.storedCoins.filter(coin => coin !== action.payload)
    }
  default:
    return state;
  }
}