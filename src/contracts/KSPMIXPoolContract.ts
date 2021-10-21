import Contract from "./Contract";
import Klaytn from "./Klaytn";

class KSPMIXPoolContract extends Contract {

    constructor() {
        super("0x19ADFF82C252B58B4df766721830ADEA0fa64d45", require("./KlayswapAirdropPoolContractABI.json"));
    }

    public async forward(): Promise<void> {
        const register = Klaytn.walletAddress;
        await this.contract.methods.forward().send({ from: register, gas: 1500000 });
    }
}

export default new KSPMIXPoolContract();
