const Caver = require("caver-js");
import "dotenv/config";

class Klaytn {

    private caver = new Caver(new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", {
        headers: [
            { name: "Authorization", value: "Basic S0FTSzgxOFc1RlBaNFA4NlpTVVg0Uk9UOkNXYkw5RWh0OHJEV29qZmZlWDdBVXk5cjRqZjQwR1NqMFBWaEpRam0=" },
            { name: "x-chain-id", value: "8217" },
        ],
    }));

    public walletAddress = process.env.PUBLIC_KEY;

    constructor() {
        this.caver.wallet.add(
            new this.caver.wallet.keyring.singleKeyring(
                this.walletAddress,
                new this.caver.wallet.keyring.privateKey(process.env.PRIVATE_KEY),
            ),
        );
    }

    public createContract(address: string, abi: any) {
        return new this.caver.contract.create(abi, address);
    }
}

export default new Klaytn();
