/** Class formatting data from API */
export default class User {
    /**
     * Get data
     *
     * @param   {Object}  infos  [Main information of the user]
     * @param   {Number}  infos.id [Id of the user]
     * @param   {Number}  infos.userId [Id of the user]
     * @param   {Object}  infos.userInfos [Age, firstname et lastname of the user]
     * @param   {Number}  infos.score [Today score of the user]
     * @param   {Number}  infos.todayScore [Today score of the user]
     * @param   {Object}  infos.keyData [Key data of the user: calorieCount, carbohydrateCount, lipidCount, proteinCount]
     */
    constructor(infos, mocked) {
        if (mocked === false) {
            this.userId = infos.id;
            this.userInfos = infos.userInfos;
            this.todayScore = infos.score;
            this.keyData = infos.keyData
        } else {
            this.userId = infos.userId;
            this.userInfos = infos.userInfos;
            this.todayScore = infos.todayScore;
            this.keyData = infos.keyData
        }
        
        
        this.days = {
            1:'L',
            2:'M',
            3:'M',
            4:'J',
            5:'V',
            6:'S',
            7:'D',
        }

        this.kind = {
            "energy" : "Energie",
            "strength" : "Force",
            'cardio' : "Cardio",
            'endurance' : "Endurance",
            'speed' : "Vitesse",
            'intensity' : "Intensité"
        }
    }

    /**
     * Format user activity data for the Bar Chart
     *
     * @param   {Object}  userActivity  [user activity data]
     *
     * @return  Formatted array of user's sessions
     */
    setUserActivity(userActivity) {
        this.sessionsActivity = userActivity.sessions;
    }

    /**
     * Format user average sessions data for the Line Chart
     *
     * @param   {Object}  userSessions  [user sessions data]
     *
     * @return  Formatted array of the user's average sessions 
     */
    setUserSessions(userSessions) {
        console.log(userSessions)
        userSessions.sessions.forEach(session => {
            session.day = this.days[session.day];
        });
        this.sessionsAverage = userSessions.sessions;
    }

    /**
     * Format user performance data for the Radar Chart
     *
     * @param   {Object}  userPerformance  [user performance data]
     *
     * @return  Formatted array of the user's performance
     */
    setUserPerformance(userPerformance) {
        userPerformance.data.forEach(performance => {
            performance.kind = this.kind[userPerformance.kind[performance.kind]];
        });
        this.performance = userPerformance.data.reverse();
    }
}