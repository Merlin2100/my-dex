import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadProvider, loadNetwork } from '../store/interactions.js';
import { ethers } from 'ethers';
import TOKEN_ABI from '../abis/Token.json';
import config from '../config.json';

function App() {

  const dispatch = useDispatch()

  const loadBlockcahinData = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    console.log(accounts[0])
  
  // Connect to blockchain
  const provider = loadProvider(dispatch)
  const chainId = await loadNetwork(provider, dispatch)

  // Token smart contract
  const MT = new ethers.Contract(config[chainId].MT.address, TOKEN_ABI, provider)
  console.log(MT.address)
  const MTSymbol = await MT.symbol()
  console.log(MTSymbol)
  
  }

  useEffect(() => {
    loadBlockcahinData()
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
