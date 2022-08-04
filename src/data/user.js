export default class User {
    constructor(infos) {
        this.userId = infos.id;
        this.userInfos = infos.userInfos;
        this.todayScore = infos.score;
        this.keyData = infos.keyData
        
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

    setUserActivity(userActivity) {
        this.sessionsActivity = userActivity.sessions;
    }

    setUserSessions(userSessions) {
        userSessions.sessions.forEach(session => {
            session.day = this.days[session.day];
        });
        this.sessionsAverage = userSessions.sessions;
    }

    setUserPerformance(userPerformance) {
        userPerformance.data.forEach(performance => {
            performance.kind = this.kind[userPerformance.kind[performance.kind]];
        });
        this.performance = userPerformance.data.reverse();
    }
}