"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BurnPoolContract_1 = __importDefault(require("./contracts/BurnPoolContract"));
const EcoPotPoolContract_1 = __importDefault(require("./contracts/EcoPotPoolContract"));
const KlayMIXPoolContract_1 = __importDefault(require("./contracts/KlayMIXPoolContract"));
const KSPMIXPoolContract_1 = __importDefault(require("./contracts/KSPMIXPoolContract"));
setInterval(async () => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
        try {
            await BurnPoolContract_1.default.burn();
        }
        catch (e) {
            console.error(e);
        }
        try {
            await KlayMIXPoolContract_1.default.forward();
        }
        catch (e) {
            console.error(e);
        }
        try {
            await KSPMIXPoolContract_1.default.forward();
        }
        catch (e) {
            console.error(e);
        }
        try {
            await EcoPotPoolContract_1.default.forward();
        }
        catch (e) {
            console.error(e);
        }
    }
}, 60000);
//# sourceMappingURL=main.js.map