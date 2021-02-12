import axios from 'axios'
import crypto from 'crypto'

axios.interceptors.request.use((config) => {
  const timestamp = Math.floor(Date.now() / 1000)
  debugger
  console.log(process.env.REACT_APP_API_SECRET)
  console.log(process.env.REACT_APP_API_KEY)
  const msg = timestamp + config.method + config.path + config.body
  const signature = crypto.createHmac("sha256", process.env.REACT_APP_API_SECRET).update(msg).digest("hex")
  config.headers['CB-ACCESS-SIGN'] = signature
  config.headers['CB-ACCESS-TIMESTAMP'] = timestamp
  config.headers['CB-ACCESS-KEY'] = process.env.REACT_APP_API_KEY
  config.headers['CB-VERSION'] = process.env.REACT_APP_COINBASE_API_VERSION
  return config;
});

export default class CoinbaseService {
  constructor() {
    axios.defaults.baseURL = 'https://api.coinbase.com'
    axios.defaults.headers['Accept'] = 'application/json'
    axios.defaults.headers['Content-Type'] = 'application/json'
  }

  async getRates(currency) {
    return axios({
      method: 'GET',
      url: `/v2/exchange-rates?currency=${currency}`,
    })
  }
}