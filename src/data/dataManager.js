import {USER_ACTIVITY, USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from "./data";
import axios from "axios";

const mocked = true; // window.location.search === "?mocked";
const userId = 12; //plus tard de la barre d'adresse

const translation = {
    "energy" : "Energie",
    "strength" : "Force",
    'cardio' : "Cardio",
    'endurance' : "Endurance",
    'speed' : "Vitesse",
    'intensity' : "Intensité"
}

const days = {
    1:'L',
    2:'M',
    3:'M',
    4:'J',
    5:'V',
    6:'S',
    7:'D',
}

// if (!mocked){
//     axios.defaults.baseURL = 'http://localhost:3000/api/';
// }

function extractFromMockedData(data){
    for (const key in data){
        //console.log(data[key].userId, userId, data[key].userId === userId)
        if (data[key].userId === userId ) return data[key];
    }
    // throw new Error("l'id n'existe pas");
}

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

async function getMainActivity(){
    try{
        if (mocked) {
            return extractFromMockedData(USER_ACTIVITY);
        }
        return await axios.get("user/"+userId);
    }
    catch(error){
        alert(error)
    }
}

async function getAverageSessions() {
    try{
        const data = mocked? extractFromMockedData(USER_AVERAGE_SESSIONS) : await axios.get("user/"+userId);
        console.log(data)
        const newData = data.sessions.map(elm=> {
            return {
                ...elm,
                day : days[elm.day]
            }
        })
        return newData;
    }
    catch(error) {
        alert(error)
    }
}

async function getPerformance(){
    try{
        const data = mocked? extractFromMockedData(USER_PERFORMANCE) : await axios.get("user/"+userId);
        const newData = data.data.map(elm=>{
            return {
                ...elm,
                kind : translation[data.kind[elm.kind]]
            }
        });
        return newData;
    }
    catch(error) {
        alert(error)
    }
}



// function getMainInformation(data) {
//     return data.USER_MAIN_DATA[0];
// }

// function getMainActivity(data) {
//     return data.USER_ACTIVITY[0];
// }

// function getAverageSessions(data) {
//     return data.USER_AVERAGE_SESSIONS[0]
// }

// function getPerformance(data) {
//     return data.USER_PERFORMANCE[0]
// }

export{
    getMainInformation,
    getMainActivity,
    getAverageSessions,
    getPerformance
}