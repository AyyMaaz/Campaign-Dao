const hre = require("hardhat");
async function main() {
    const Campaign = await hre.ethers.getContractFactory("CampaignFactory");
    const campaign = await Campaign.deploy();
  
    await campaign.deployed();
  
    console.log(
      ` ${campaign.address}`
    );
  }
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  // 0x3447C8bFA71934418e33f1c6FB6830851870A643
  