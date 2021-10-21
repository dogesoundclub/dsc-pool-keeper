import Contract from "./Contract";
import Klaytn from "./Klaytn";

class BurnPoolContract extends Contract {

    constructor() {
        super("0x4b1e4c30B12B8564686FF30F608a18Abfbd7adBc", require("./BurnPoolContractABI.json"));
    }

    public async burn(): Promise<void> {
        const register = Klaytn.walletAddress;
        await this.contract.methods.burn().send({ from: register, gas: 1500000 });
    }
}

export default new BurnPoolContract();
