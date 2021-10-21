"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contract_1 = __importDefault(require("./Contract"));
const Klaytn_1 = __importDefault(require("./Klaytn"));
class KlayMIXPoolContract extends Contract_1.default {
    constructor() {
        super("0x0c04A7D66F8b37fcAd79887529F79b3Fa4650B6F", require("./KlayswapAirdropPoolContractABI.json"));
    }
    async forward() {
        const register = Klaytn_1.default.walletAddress;
        await this.contract.methods.forward().send({ from: register, gas: 1500000 });
    }
}
exports.default = new KlayMIXPoolContract();
//# sourceMappingURL=KlayswapAirdropPoolContract.js.map