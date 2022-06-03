import './style/App.css';
import Header from './components/Header/Header';
import Activity from './components/Activity/Activity';
import Keydata from './components/Keydata/Keydata';
import imgMeditation from './assets/meditation.png';
import imgSwimming from './assets/swimming.png';
import imgCycling from './assets/cycling.png';
import imgBodybuilding from './assets/bodybuilding.png';
import energy from './assets/energy.png';

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
        <aside>
          <div className='activities'>
            <Activity img={imgMeditation} alt="meditation"/>
            <Activity img={imgSwimming} alt="swimming"/>
            <Activity img={imgCycling} alt="cycling"/>
            <Activity img={imgBodybuilding} alt="bodybuilding"/>
          </div>
          <p className='copyrights'>Copyright, SportSee 2020</p>
        </aside>
        <div className='dashboardSection'>
          <header className='dashboardHeader'>
            <h1>Bonjour XXX</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier &#128079;</p>
          </header>
          <div className='dashboardContent'>
            <div className='dailyActivity'></div>
            <div className='averageSessions'></div>
            <div className='activityType'></div>
            <div className='todayScore'></div>
            <div className='keyData'>
              <Keydata className="energy" img={energy} data="1,930kCal" dataType="Calories"/>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default App;
