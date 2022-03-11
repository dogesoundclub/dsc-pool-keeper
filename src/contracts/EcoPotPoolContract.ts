import Contract from "./Contract";
import Klaytn from "./Klaytn";

class EcoPotPoolContract extends Contract {

    constructor() {
        super("0x126634Fad46F1F2Dadf6Cb512534E87B0EA2741f", require("./EcoPotPoolContractABI.json"));
    }

    public async forward(): Promise<void> {
        const register = Klaytn.walletAddress;
        await this.contract.methods.forward().send({ from: register, gas: 1500000 });
    }
}

export default new EcoPotPoolContract();
