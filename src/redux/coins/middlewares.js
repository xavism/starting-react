import CoinbaseService from '../../services/coinbaseService';
import { ADD_COIN_LIST } from './types';

const _conbaseService = new CoinbaseService()

export const getCoins = () => async (dispatch, getState) => {
  let {data} = await _conbaseService.getRates('USD')
  dispatch({
    type: ADD_COIN_LIST,
    payload: data.data.rates
  })
}