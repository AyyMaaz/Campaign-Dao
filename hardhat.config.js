/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

task("accounts", "Prints the list of accounts", async (taskArgs, hre)=>{
  const accounts=await hre.ethers.getSigners();
  for(const account of accounts){
    console.log(account.address);
  }
})
const PrivateKey=process.env.PRIVATE_KEY;
const Alchemy=process.env.ALCHEMY_RPC_URL;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork:"polygon",
  networks:{
    hardhat:{},
    polygon:{
      url:Alchemy,
      accounts:[PrivateKey]
    }
  }
  //0x4bDD0Db70322Fb20E9C3e25862dE396415A080F6 0x4bDD0Db70322Fb20E9C3e25862dE396415A080F6
  
};
// 0xa0Ee7A142d267C1f36714E4a8F75612F20a79720
// 0xBcd4042DE499D14e55001CcbB24a551F3b954096
// 0x71bE63f3384f5fb98995898A86B02Fb2426c5788
// 0xFABB0ac9d68B0B445fB7357272Ff202C5651694a
// 0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec
// 0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097
// 0xcd3B766CCDd6AE721141F452C550Ca635964ce71
// 0x2546BcD3c84621e976D8185a91A922aE77ECEc30
// 0xbDA5747bFD65F08deb54cb465eB87D40e51B197E
// 0xdD2FD4581271e230360230F9337D5c0430Bf44C0
// 0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199
