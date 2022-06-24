import './style/App.css';
import {getMainActivity, getMainInformation, getAverageSessions, getPerformance} from './data/dataManager';
import { useEffect, useState } from 'react';
// Assets
import imgMeditation from './assets/meditation.png';
import imgSwimming from './assets/swimming.png';
import imgCycling from './assets/cycling.png';
import imgBodybuilding from './assets/bodybuilding.png';
import energy from './assets/energy.png';
import proteins from './assets/proteins.png';
import glucides from './assets/glucides.png';
import lipides from './assets/lipides.png';
import Header from './components/Header/Header';
// Components
import Activity from './components/Activity/Activity';
import Keydata from './components/Keydata/Keydata';
import DailyActivityChart from './components/BarChart/BarChart';
import AverageSessionsChart from './components/LineChart/LineChart';
import ActivityTypeChart from './components/RadarChart/RadarChart';
import ScoreChart from './components/RadialChart/RadialChart';
//import ScoreChart from './components/PieChart/PieChart';



function App() {

  const [mainInformation, setMainInfo] = useState(null);
  // console.log(mainInformation) 

  const [mainActivity, setMainActivity] = useState(null);
  // console.log(mainActivity)

  const [averageSessions, setAverageSessions] = useState(null);
  // console.log(averageSessions)

  const [activityType, setActivityType] = useState(null);
  // console.log(activityType)

  useEffect(()=>{
    (async ()=>{
      setMainInfo(await getMainInformation());
      setMainActivity(await getMainActivity());
      setAverageSessions(await getAverageSessions());
      setActivityType(await getPerformance());
    })()
  }, [])

  if (mainInformation === null) return (<h1>loading</h1>);

  return (
    <div className="App">
      <Header/>
      <aside>
        <div className='activities'>
          <Activity img={imgMeditation} alt="meditation"/>
          <Activity img={imgSwimming} alt="swimming"/>
          <Activity img={imgCycling} alt="cycling"/>
          <Activity img={imgBodybuilding} alt="bodybuilding"/>
        </div>
        <p className='copyrights'>Copyright, SportSee 2020</p>
      </aside>
      <section className='dashboardSection'>
        <header className='dashboardHeader'>
          <h1>Bonjour <span>{mainInformation.userInfos.firstName}</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier &#128079;</p>
        </header>
        <div className='dashboardContent'>
          <DailyActivityChart data={mainActivity.sessions} title="Activité quotidienne" xDataKey="day" data1="kilogram" legendData1="Poids (kg)" data2="calories" legendData2="Calories brûlées (kCal)"/>
          <AverageSessionsChart data={averageSessions} title="Durée moyenne des sessions" xDataKey="day" lineData="sessionLength"/>
          <ActivityTypeChart data={activityType} angleDataKey="kind" chartDataKey="value"/>
          <ScoreChart data={mainInformation.todayScore} title="Score"/>
          <div className='keyDataContainer'>
            <Keydata className="energy" img={energy} data={mainInformation.keyData.calorieCount} dataType="Calories"/>
            <Keydata className="proteins" img={proteins} data={mainInformation.keyData.proteinCount} dataType="Protéines"/>
            <Keydata className="glucides" img={glucides} data={mainInformation.keyData.carbohydrateCount} dataType="Glucides"/>
            <Keydata className="lipides" img={lipides} data={mainInformation.keyData.lipidCount} dataType="Lipides" />
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default App;
