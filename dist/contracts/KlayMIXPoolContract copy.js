"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contract_1 = __importDefault(require("./Contract"));
const Klaytn_1 = __importDefault(require("./Klaytn"));
class KSPMIXPoolContract extends Contract_1.default {
    constructor() {
        super("0x19ADFF82C252B58B4df766721830ADEA0fa64d45", require("./KlayswapAirdropPoolContractABI.json"));
    }
    async forward() {
        const register = Klaytn_1.default.walletAddress;
        await this.contract.methods.forward().send({ from: register, gas: 1500000 });
    }
}
exports.default = new KSPMIXPoolContract();
//# sourceMappingURL=KlayMIXPoolContract%20copy.js.map