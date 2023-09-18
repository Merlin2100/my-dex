import { useEffect } from 'react';
import '../App.css';

function App() {

  const loadBlockcahinData = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    console.log(accounts[0])
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
