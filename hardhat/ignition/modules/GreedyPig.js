const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("GreedyPig", (m) => {
  const keyhash = "0x816bedba8a50b294e5cbd47842baf240c2385f2eaf719edbd4f250a137a8c899" 
  const subscriptionId = "3301302430656903546507877274551461754001640077919076457720544629354271066678"
  const VRFConsumerBaseV2Plus = "0x343300b5d84D444B2ADc9116FEF1bED02BE49Cf2"
  const greedyPig = m.contract("GreedyPig", [keyhash,subscriptionId,VRFConsumerBaseV2Plus]);

  return { greedyPig };
});
