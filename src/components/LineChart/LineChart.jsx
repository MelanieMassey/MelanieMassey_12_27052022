import './LineChart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import propTypes from 'prop-types';
import React from 'react';

/**
 * @param {object} props Necessary data to use the component
 * @param {Array} props.data Average sessions data used for the Line Chart
 * @param {string} props.lineData Name of the data used for the Line
 * @param {string} props.title Title of the chart
 * @param {string} props.xDataKey Name of the data used for X axis
 * @returns React Line chart component using Recharts
 */
function CreateLineChart(props) {
    //console.log(props)
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="tooltipKg">{`${payload[0].value} min`}</p>
            </div>
          );
        }
        return null;
    };

    return (
        <div className='averageSessions'>
            <h2>{props.title}</h2>
            <ResponsiveContainer 
                width="100%" 
                height="100%"
                className="averageResponsive"
            >
                <LineChart
                    data={props.data}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                    }}
                    onMouseMove={(e) => {
                        if (e.isTooltipActive === true) {
                          let div = document.querySelector('.averageResponsive');
                          let windowWidth = div.clientWidth;
                          let mouseXpercentage = Math.round(
                            (e.activeCoordinate.x / windowWidth) * 100
                          );
                          
                          div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
                        }
                    }}
                >
                    
                    <CartesianGrid vertical={false} horizontal={false}/>
                    <XAxis dataKey={props.xDataKey} 
                        tick={{ fill: '#ffffff', opacity: 0.5 }} 
                        tickLine={{ stroke: '' }}
                        axisLine={{ stroke: "" }}
                        // tickFormatter={formattedDays}
                        
                    />
                    <YAxis 
                        hide={true}
                        domain={['dataMin -15', 'dataMax + 45']}
                    />
                    <Tooltip 
                        content={<CustomTooltip/>}
                        cursor={{stroke:'none'}}
                    />
                    {/* <Legend /> */}
                    <Line type="natural" dataKey={props.lineData} stroke="#ffffff" dot={false}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
      );

    /* TENTATIVE PERSONNALISATION ABSCISSE #1 */
    // const customX = (data.data.day) => {
    //     switch(data.data.day) {
    //         case 1:
    //             return data.data.day = "L";
    //             break;
    //         case 2:
    //             return data.data.day = "M";
    //             break;
    //         case 3:
    //             return data.data.day = "M";
    //             break;
    //         case 4:
    //             return data.data.day = "J";
    //             break;
    //         case 5:
    //             return data.data.day = "V";
    //             break;
    //         case 6:
    //             return data.data.day = "S";
    //             break;
    //         case 7:
    //             return data.data.day = "D";
    //             break;
    //         default: 
    //             data.data.day = data.data.day;
    //     }
    // }

    /* TENTATIVE PERSONNALISATION ABSCISSES #2 */
    // const days={
    //     1:'L',
    //     2:'M',
    //     3:'M',
    //     4:'J',
    //     5:'V',
    //     6:'S',
    //     7:'D',
    // }
    // const formattedDays=(item)=>days[item]

    // FINAL => Personnalisation des abscisses gérées dans mon DataManager
}

CreateLineChart.propTypes = {
  data: propTypes.array,
  lineData: propTypes.string,
  title: propTypes.string,
  xDataKey: propTypes.string,

}

export default CreateLineChart;