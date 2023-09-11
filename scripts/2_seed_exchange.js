const config = require("../src/config.json")

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 18)
}

async function main() {
    // Fetch accounts from wallet
    const accounts = await ethers.getSigners()

    // Fetch network    
    const { chainId } = await ethers.provider.getNetwork()
    console.log("Using chain id;", chainId)

    // Fetch deployed tokens
    const MT = await ethers.getContractAt("Token", config[chainId].MT.address)
    console.log(`MT token fetched from: ${MT.address}\n`)

    const mETH = await ethers.getContractAt("Token", config[chainId].mETH.address)
    console.log(`mETH token fetched from: ${mETH.address}\n`)

    const mDAI = await ethers.getContractAt("Token", config[chainId].mDAI.address)
    console.log(`mDAI token fetched from: ${mDAI.address}\n`)

    // Fetch deployed excahnge
    const exchange = await ethers.getContractAt("Exchange", config[chainId].exchange.address)
    console.log(`Exchange fetched from: ${exchange.address}\n`)

    // Give 10,000 mETH to user2 (user1 deployed the contracts and ,
    // therefore, has all the tokens at the beginning)

    // user1 approves 10,000 MT

    // user1 deposits 10,000 MT

    // user2 approves 10,000 mETH

    // user2 deposits 10,000 mETH

    ////////////////////////////////////////////////////////////////
    // Seed a cancelled order
    //

    // user1 makes order to get some mETH back

    // user1 decides to cancel order 

    ////////////////////////////////////////////////////////////////
    // Seed filled orders
    //

    // user1 makes order

    // user2 fills order

    // user1 makes another order

    // user2  fills another order

    // user1 makes final order

    // user2 fills another order

    ////////////////////////////////////////////////////////////////
    // Seed filled orders
    //

    // user1 makes 10 orders

    // user2 makes 10 orders
    
  }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });