import BurnPoolContract from "./contracts/BurnPoolContract";
import KlayMIXPoolContract from "./contracts/KlayMIXPoolContract";
import KSPMIXPoolContract from "./contracts/KSPMIXPoolContract";

setInterval(async () => {
    const now = new Date();

    // 자정에 실행
    if (now.getHours() === 0 && now.getMinutes() === 0) {
        await BurnPoolContract.burn();

        // 월요일
        if (now.getDate() === 1) {
            await KlayMIXPoolContract.forward();
            await KSPMIXPoolContract.forward();
        }
    }
}, 60000);
