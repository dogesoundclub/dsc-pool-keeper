import Contract from "./Contract";
import Klaytn from "./Klaytn";

class KlayMIXPoolContract extends Contract {

    constructor() {
        super("0x0c04A7D66F8b37fcAd79887529F79b3Fa4650B6F", require("./KlayswapAirdropPoolContractABI.json"));
    }

    public async forward(): Promise<void> {
        const register = Klaytn.walletAddress;
        await this.contract.methods.forward().send({ from: register, gas: 1500000 });
    }
}

export default new KlayMIXPoolContract();
