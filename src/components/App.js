import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import config from '../config.json';
import { 
  loadProvider, 
  loadNetwork, 
  loadAccount,
  loadTokens,
  loadExchange,
} from '../store/interactions.js';

function App() {

  const dispatch = useDispatch()

  const loadBlockchainData = async () => {
 
    // Connect to blockchain
    const provider = loadProvider(dispatch)
    const chainId = await loadNetwork(provider, dispatch)

    await loadAccount(provider, dispatch)
      
    // Token smart contract
    const MT = config[chainId].MT.address
    const mETH = config[chainId].mETH.address
    await loadTokens(provider, [MT, mETH], dispatch)

    // Exchange contract
    const exchange = config[chainId].exchange.address
    await loadExchange(provider, exchange, dispatch)
  }

  useEffect(() => {
    loadBlockchainData()
  })
  return ( 
    <div className="App">
      <div>
        
        {/* Navbar */}

        <main className='exchange grid'>
          <section className='exchnage__section--left grid'>

            {/* Markets */}
            
            {/* Balance */}

            {/* Order */}

          </section>
          <section className='exchange__section--right grid'>

            {/* PriceCahrt */}

            {/* Transactions */}

            {/* Trades */}

            {/* OrderBook */}

          </section>
        </main>

        {/* ALert */}

      </div>
    </div>
  );
}

export default App;
