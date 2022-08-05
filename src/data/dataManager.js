import {USER_ACTIVITY, USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from "./data";
import axios from "axios";
import User from "./user.js";

const mocked = false; // window.location.search === "?mocked"

let store = {};

if (!mocked){
    axios.defaults.baseURL = 'https://calm-gorge-80201.herokuapp.com/';
}

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
        if (data[key].userId === store.userId ) return data[key];
    }
    console.log(data)
    // throw new Error("l'id n'existe pas");
}

/**
 * Get main information data: user infos, key data & today score
 * 
 * @param {Number} userId User id number
 *
 * @return  {Promise}  User main information
 */
async function getMainInformation(userId){
    // try{
        if (mocked) {
            return extractFromMockedData(USER_MAIN_DATA);
        }
        const response = await axios.get("user/"+userId);
        return response.data.data;
        
    // }
    // catch(error){
    //     alert("getMainInformation : "+error)
    // }
}

/**Get main activity data: sessions data
 * 
 * @param {Number} userId User id number
 *
 * @return  {Promise}  User main activity data
 */
async function getMainActivity(userId){
    try{
        if (mocked) {
            return extractFromMockedData(USER_ACTIVITY);
        }
        const response = await axios.get("user/"+userId+"/activity");
        return response.data.data;
    }
    catch(error){
        alert("getMainActivity : "+error)
    }
}

/**
 * Get average sessions data: session length per day
 *
 * @param {Number} userId User id number
 *
 * @return  {Promise}  User average sessions data
 */
async function getAverageSessions(userId) {
    try{
        const data = mocked? extractFromMockedData(USER_AVERAGE_SESSIONS) : (await axios.get("user/"+userId+"/average-sessions")).data.data;
        // const newData = data.sessions.map(elm=> {
        //     return {
        //         ...elm,
        //         // day : days[elm.day]
        //     }
        // })
        return data;
    }
    catch(error) {
        alert("getAverageSessions : "+error)
    }
}

/**
 * Get performance data: Cardio, energy, endurance, speed, intensity
 *
 * @param {Number} userId User id number
 *
 * @return  {Promise}  User performance data
 */
async function getPerformance(userId){
    try{
        const data = mocked? extractFromMockedData(USER_PERFORMANCE) : (await axios.get("user/"+userId+"/performance")).data.data;
        // const newData = data.data.map(elm=>{
        //     return {
        //         ...elm,
        //         // kind : translation[data.kind[elm.kind]]
        //     }
        // });
        return data;
    }
    catch(error) {
        alert("getPerformance : "+error)
    }
}

// async function getAllData(id){
//     if (id === undefined ) throw new Error("id indefini");
//     store.userId = parseInt(id);
//     updateData({mainInformation : await getMainInformation(store.userId)});
//     if (!store.mainInformation)throw new Error("id non pris en charge");
//     updateData({mainActivity : await getMainActivity(store.userId)});
//     updateData({averageSessions : await getAverageSessions(store.userId)});
//     updateData({activityType : await getPerformance(store.userId)});

//     return store;
// }

/**
 * Get and format all necessary data
 *
 * @param   {Number}  id  [id description]
 *
 * @return  {Promise}  Object with all necessary formatted data
 */
async function getAllData2(id){
    if (id === undefined) {
        throw new Error("id indefini");
    }
    let user = new User(await getMainInformation(id));
    user.setUserActivity(await getMainActivity(id));
    user.setUserSessions(await getAverageSessions(id));
    user.setUserPerformance(await getPerformance(id));
    console.log(user)
    return user;
}

// function updateData(newData){
//     store = {
//         ...store,
//         ...newData
//     }
// }

export{
    // getAllData,
    getAllData2
    // doesIdExist
}