import {USER_MAIN_DATA} from "./data";
import axios from "axios";

const mocked = true; // window.location.search === "?mocked";
const userId = 12; //plus tard de la barre d'adresse



// if (!mocked){
//     axios.defaults.baseURL = 'http://localhost:3000/api/';
// }

async function getMainInformation(){
    
    try{
        if (mocked) {
            return extractFromMockedData(USER_MAIN_DATA);
        }
        return await axios.get("user/"+userId);
    }
    catch(error){
        alert(error)
    }

}


function extractFromMockedData(data){
    for (const key in data){
        console.log(data[key].userId, userId, data[key].userId === userId)
        if (data[key].userId === userId ) return data[key];
    }
    // throw new Error("l'id n'existe pas");
}

// function getMainInformation(data) {
//     return data.USER_MAIN_DATA[0];
    
// }

function getMainActivity(data) {
    return data.USER_ACTIVITY[0];
}

function getAverageSessions(data) {
    return data.USER_AVERAGE_SESSIONS[0]
}

function getPerformance(data) {
    return data.USER_PERFORMANCE[0]
}

export{
    getMainInformation,
    getMainActivity,
    getAverageSessions,
    getPerformance
}