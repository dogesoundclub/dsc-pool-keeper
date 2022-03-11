import BurnPoolContract from "./contracts/BurnPoolContract";
import EcoPotPoolContract from "./contracts/EcoPotPoolContract";
import KlayMIXPoolContract from "./contracts/KlayMIXPoolContract";
import KSPMIXPoolContract from "./contracts/KSPMIXPoolContract";

setInterval(async () => {
    const now = new Date();

    // 자정에 실행
    if (now.getHours() === 0 && now.getMinutes() === 0) {
        try {
            await BurnPoolContract.burn();
        } catch (e) { console.error(e); }
        try {
            await KlayMIXPoolContract.forward();
        } catch (e) { console.error(e); }
        try {
            await KSPMIXPoolContract.forward();
        } catch (e) { console.error(e); }
        try {
            await EcoPotPoolContract.forward();
        } catch (e) { console.error(e); }
    }
}, 60000);
