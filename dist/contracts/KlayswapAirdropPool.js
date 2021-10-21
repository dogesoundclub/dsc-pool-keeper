"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contract_1 = __importDefault(require("./Contract"));
const Klaytn_1 = __importDefault(require("./Klaytn"));
class BurnPoolContract extends Contract_1.default {
    constructor() {
        super("0x4b1e4c30B12B8564686FF30F608a18Abfbd7adBc", require("./BurnPoolContractABI.json"));
    }
    async burn() {
        const register = Klaytn_1.default.walletAddress;
        await this.contract.methods.burn().send({ from: register, gas: 1500000 });
    }
}
exports.default = new BurnPoolContract();
//# sourceMappingURL=KlayswapAirdropPool.js.map