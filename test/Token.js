const { ethers } = require("hardhat")
const { expect } = require("chai")

describe("Token", () => {

    let token

    beforeEach(async () => {
        const Token = await ethers.getContractFactory("Token")
        token = await Token.deploy()
    })

    it("Return the correct name", async () => {
        expect(await token.name()).to.equal("My Token")
    })

    it("Returns the correct symbol", async () => {
        expect(await token.symbol()).to.equal("MT")
    })

    it("Returns the correct decimals", async () => {
        expect(await token.decimals()).to.equal(18)
    })
})