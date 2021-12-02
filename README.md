# MyEpic NFT 

This project demonstrates a basic NFT token built on the ethereum network using hardhat.

To get up and running you need to create a `.env` file in the project directory and populate with some important environment variables.

```
STAGING_ALCHEMY_KEY=<YOUR ALCHEMY KEY FOR STAGING ENVIRONMENT>
PRIVATE_KEY=<YOUR WALLET PRIVATE KEY>
PROD_ALCHEMY_KEY=<YOUR ALCHEMY KEY FOR PRODUCTION ENVIRONMENT>
```

To deploy to the testnet which in this case is the rinkeby testnet you need an `STAGING_ALCHEMY_KEY` for staging environment which alchemy creates for you.
Likewise to deploy to the ethereum mainnet you would need to provide a `PROD_ALCHEMY_KEY` which is an alchemy key for the mainnet environment, once again provided by alchemy. You can get one by creating an account on [Alchemy](https://www.alchemy.com/)

For both environments you would need to provied a `PRIVATE_KEY` which is your ethereum wallet private key

**Do not make any of these keys public**

To deploy to other networks, add the network configuration to the `hardhat.config.js` file.

```js
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      chainId: 1,
      url: process.env.PROD_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    other-network: {
        ...
    }
  },
};
```


To deploy use the `deploy.js` script by running `npx hardhat run scripts/deploy --networks=<networkname>`<br>
An example that deploys to the rinkeby network is `npx hardhat run scripts/deploy.js --networks=rinkeby`

To run locally on a local blockchain created by hardhat use the `run.js` script by running the command `npx hardhat run scripts/run.js`


Other built in commands from hardhat include

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
