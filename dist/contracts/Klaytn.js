"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Caver = require("caver-js");
require("dotenv/config");
class Klaytn {
    constructor() {
        this.caver = new Caver(new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", {
            headers: [
                { name: "Authorization", value: "Basic S0FTSzgxOFc1RlBaNFA4NlpTVVg0Uk9UOkNXYkw5RWh0OHJEV29qZmZlWDdBVXk5cjRqZjQwR1NqMFBWaEpRam0=" },
                { name: "x-chain-id", value: "8217" },
            ],
        }));
        this.walletAddress = process.env.PUBLIC_KEY;
        this.caver.wallet.add(new this.caver.wallet.keyring.singleKeyring(this.walletAddress, new this.caver.wallet.keyring.privateKey(process.env.PRIVATE_KEY)));
    }
    createContract(address, abi) {
        return new this.caver.contract.create(abi, address);
    }
}
exports.default = new Klaytn();
//# sourceMappingURL=Klaytn.js.map