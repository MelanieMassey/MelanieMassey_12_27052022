// @ts-nocheck
import './style/App.css';
import {getAllData2} from './data/dataManager';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
import CreateBarChart from './components/BarChart/BarChart';
import CreateLineChart from './components/LineChart/LineChart';
import CreateRadarChart from './components/RadarChart/RadarChart';
import CreateRadialChart from './components/RadialChart/RadialChart';
import Loader from './components/Loader/Loader';

function App() {
  const { userId } = useParams();
  let navigate = useNavigate();
  
  const [error, setError] = useState(false);
  const [pageState, setPageState] = useState({userInfos: {}, sessionsActivity: [], sessionsAverage: [], performance: [], todayScore: 0, keyData: {}});
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    if (userId === undefined) return;
    (async ()=>{
      try{
        const newPageData = await getAllData2(userId);
        setPageState(newPageData);
        setLoading(true);
      }
      catch(error){
        console.error(error)
        setError(true);
      }
    })()
  }, [userId])
  
  if (userId === undefined) {
    navigate("/user/12", {replace: true})
  }
  if (error) {
    navigate("/404", {replace: true})
  }
  if (pageState === null) {
    return <Loader/>;
  }
  // if (pageState.error) return (<Navigate to="*" />);

  // const {mainInformation, mainActivity, averageSessions, activityType} = pageState;
  //console.log(pageState)


  return (
    
    <div className="App">
      <Header/>
      {loading && 
      <div>
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
          <h1>Bonjour <span>{pageState.userInfos.firstName}</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier &#128079;</p>
        </header>
        <div className='dashboardContent'>
          <CreateBarChart data={pageState.sessionsActivity} title="Activité quotidienne" xDataKey="day" data1="kilogram" legendData1="Poids (kg)" data2="calories" legendData2="Calories brûlées (kCal)"/>
          <CreateLineChart data={pageState.sessionsAverage} title="Durée moyenne des sessions" xDataKey="day" lineData="sessionLength"/>
          <CreateRadarChart data={pageState.performance} angleDataKey="kind" chartDataKey="value"/>
          <CreateRadialChart data={pageState.todayScore} title="Score"/>
          <div className='keyDataContainer'>
            <Keydata className="energy" img={energy} data={pageState.keyData.calorieCount} dataType="Calories" key="energy"/>
            <Keydata className="proteins" img={proteins} data={pageState.keyData.proteinCount} dataType="Protéines" key="proteins"/>
            <Keydata className="glucides" img={glucides} data={pageState.keyData.carbohydrateCount} dataType="Glucides"/>
            <Keydata className="lipides" img={lipides} data={pageState.keyData.lipidCount} dataType="Lipides" />
          </div>
        </div>
      </section>
      </div>
      }
    </div>
  );
}

export default App;
