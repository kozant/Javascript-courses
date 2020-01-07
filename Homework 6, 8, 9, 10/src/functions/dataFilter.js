import { arrStartTime, arrDate } from "../main.js";

export let dataFilter = () => {
    let now = new Date();
    
    for(let i = 0; i < arrStartTime.length; i++) {
        let ourDay = Number(String(arrDate[i][8]) + String(arrDate[i][9]));
        let ourMonth = Number(String(arrDate[i][5]) + String(arrDate[i][6])) - 1;
        let ourYear = Number(String(arrDate[i][0]) + String(arrDate[i][1]) + String(arrDate[i][2]) + String(arrDate[i][3]));
        
        let ourHour = Number(String(arrStartTime[i][0]) + String(arrStartTime[i][1]));
        let ourMinute = Number(String(arrStartTime[i][3]) + String(arrStartTime[i][4]));
        let ourDate = new Date(ourYear, ourMonth, ourDay, ourHour, ourMinute);
        console.log(ourDate);

        if(ourDate > now) {
            return true;
        }
        if(ourDate < now) {
            return false;
        }
    }
}