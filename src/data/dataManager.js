import {USER_ACTIVITY, USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from "./data.js";
import axios from "axios";
import User from "./User.js";

const mocked = true; // window.location.search === "?mocked"

if (!mocked){
    axios.defaults.baseURL = 'https://calm-gorge-80201.herokuapp.com/';
}

/**
 * Get user data from Mocked Data
 *
 * @param   {Object}  data  Array of data from all users
 * @param   {Number}  id User Id number
 *
 * @return  {Object}        User data
 */
function extractFromMockedData(data, id){
    for (const key in data){
        if (data[key].userId === id) {
            
            console.log(typeof(JSON.stringify(data[key])))
            console.log(JSON.parse(JSON.stringify(data[key])))
            return JSON.parse(JSON.stringify(data[key]));
            // return {...data[key]};
        }
    }
}

/**
 * Get main information data: user infos, key data & today score
 * 
 * @param {Number} userId User id number
 *
 * @return  {Promise}  User main information
 */
async function getMainInformation(userId){
    try{
        if (mocked) {
            console.log(USER_MAIN_DATA, typeof(userId))
            return extractFromMockedData(USER_MAIN_DATA, userId);
        }
        const response = await axios.get("user/"+userId);
        return response.data.data;
    }
    catch(error){
        alert("getMainInformation : "+error)
    }
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
            return extractFromMockedData(USER_ACTIVITY, userId);
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
        if (mocked) {
            return extractFromMockedData(USER_AVERAGE_SESSIONS, userId);
        }
        const response = await axios.get("user/"+userId+"/average-sessions");
        console.log(response);
        return response.data.data;

        // const data = mocked? extractFromMockedData(USER_AVERAGE_SESSIONS, userId) : (await axios.get("user/"+userId+"/average-sessions")).data.data;
        // console.log(data)
        // return data;
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
        if (mocked) {
            return extractFromMockedData(USER_PERFORMANCE, userId);
        }
        const response = await axios.get("user/"+userId+"/performance");
        return response.data.data
        
        // const data = mocked? extractFromMockedData(USER_PERFORMANCE, userId) : (await axios.get("user/"+userId+"/performance")).data.data;
        // console.log(data)
        // return data;
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
 * @param   {}  id  [id description]
 *
 * @return  {Promise}  Object with all necessary formatted data
 */
async function getAllData2(id){
    let idNumber = parseInt(id)
    if (id === undefined) {
        throw new Error("id indefini");
    }
    let user = new User(await getMainInformation(idNumber), mocked);
    console.log(await getAverageSessions(idNumber))
    user.setUserActivity(await getMainActivity(idNumber));
    user.setUserSessions(await getAverageSessions(idNumber));
    let userPerformance = await getPerformance(idNumber);
    user.setUserPerformance(userPerformance);
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
}