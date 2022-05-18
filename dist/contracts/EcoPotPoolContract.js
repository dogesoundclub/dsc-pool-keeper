"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contract_1 = __importDefault(require("./Contract"));
const Klaytn_1 = __importDefault(require("./Klaytn"));
class EcoPotPoolContract extends Contract_1.default {
    constructor() {
        super("0x126634Fad46F1F2Dadf6Cb512534E87B0EA2741f", require("./EcoPotPoolContractABI.json"));
    }
    async forward() {
        const register = Klaytn_1.default.walletAddress;
        await this.contract.methods.forward().send({ from: register, gas: 1500000 });
    }
}
exports.default = new EcoPotPoolContract();
//# sourceMappingURL=EcoPotPoolContract.js.map