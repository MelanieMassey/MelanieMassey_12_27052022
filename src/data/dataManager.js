import {USER_ACTIVITY, USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from "./data";
import axios from "axios";

const mocked = true; // window.location.search === "?mocked";
const userId = 12; //plus tard de la barre d'adresse

/**
 * Reformatting the Performance Data => Translation management from ENG to FR 
 *
 * @var {Object}
 */
const translation = {
    "energy" : "Energie",
    "strength" : "Force",
    'cardio' : "Cardio",
    'endurance' : "Endurance",
    'speed' : "Vitesse",
    'intensity' : "Intensité"
}

/**
 * Reformatting the average sessions data => Days instead of numbers
 *
 * @var {[type]}
 */
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

/**
 * Get user data from Mocked Data
 *
 * @param   {Object}  data  Array of data from all users
 *
 * @return  {Object}        User data
 */
function extractFromMockedData(data){
    // console.log(data)
    for (const key in data){
        //console.log(data[key].userId, userId, data[key].userId === userId)
        if (data[key].userId === userId ) return data[key];
    }
    console.log(data)
    // throw new Error("l'id n'existe pas");
}

/**
 * Get main information data: user infos, key data & today score
 *
 * @return  {Promise}  User main information
 */
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

/**Get main activity data: sessions data
 *
 * @return  {Promise}  User main activity data
 */
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

/**
 * Get average sessions data: session length per day
 *
 * @return  {Promise}  User average sessions data
 */
async function getAverageSessions() {
    try{
        const data = mocked? extractFromMockedData(USER_AVERAGE_SESSIONS) : await axios.get("user/"+userId);
        //console.log(data)
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

/**
 * Get performance data: Cardio, energy, endurance, speed, intensity
 *
 * @return  {Promise}  User performance data
 */
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



export{
    getMainInformation,
    getMainActivity,
    getAverageSessions,
    getPerformance
}