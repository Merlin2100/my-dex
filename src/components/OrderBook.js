import { useSelector } from "react-redux"
import { orderBookSelector } from "../store/selectors"

const OrderBook = () => {

    const symbols = useSelector(state => state.tokens.symbols)    
    const orderBook = useSelector(orderBookSelector)

    return (
      <div className="component exchange__orderbook">
        <div className="component__header flex-between">
          <h2>Order Book</h2>
        </div>
  
        <div className="flex">

        {!orderBook || orderBook.sellOrders.length === 0 ? (
          <p className="flex-centrer">No Sell Orders</p>
        ) : (
          <table className="exchange__orderbook--sell">
            <caption>Selling</caption>
            <thead>
              <tr>
                <th>{symbols && symbols[0]}</th>
                <th>{symbols && symbols[1]} / {symbols && symbols[0]}</th>
                <th>{symbols && symbols[1]}</th>
              </tr>
            </thead>
            <tbody>
              {orderBook && orderBook.sellOrders.map((order, index) => {
                return(
                  <tr key={index}>
                    <td>{order._token0AMount}</td>
                    <td style ={{ color: `${order._orderTypeClass}`}}>{order._tokenPrice}</td>
                    <td>{order._token1Amount}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}

          <div className="divider"></div>
  
          {!orderBook || orderBook.buyOrders.length === 0 ? (
          <p className="flex-centrer">No Buy Orders</p>
        ) : (
          <table className="exchange__orderbook--buy">
            <caption>Buying</caption>
            <thead>
              <tr>
                <th>{symbols && symbols[0]}</th>
                <th>{symbols && symbols[1]} / {symbols && symbols[0]}</th>
                <th>{symbols && symbols[1]}</th>
              </tr>
            </thead>
            <tbody>
              {orderBook && orderBook.buyOrders.map((order, index) => {
                return(
                  <tr key={index}>
                    <td>{order._token0AMount}</td>
                    <td style ={{ color: `${order._orderTypeClass}`}}>{order._tokenPrice}</td>
                    <td>{order._token1Amount}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
        </div>
      </div>
    )
  }
  
  export default OrderBook