import './BarChart.css';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import propTypes from 'prop-types';

/**
 * Creates a bar chart
 * @param {object} props Necessary data to use the component
 * @param {Object} props.data Daily activity data used for the bar chart
 * @param {String} props.data1 Data used for black bars
 * @param {String} props.data2 Data used for main colored bars
 * @param {String} props.legendData1 Legend of Data1
 * @param {String} props.legendData2 Legend of Data2
 * @param {String} props.title Title of the chart
 * @param {String} props.xDataKey Name of the data used for X axis
 * @returns React bar chart component using Recharts
 */
function DailyActivityChart(props) {
    // console.log(props)
    

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="tooltipKg">{`${payload[0].value} kg`}</p>
              <p className="tooltipKg">{`${payload[1].value} Kcal`}</p>
            </div>
          );
        }
      
        return null;
    };

    const formattedDate=(value)=>(new Date(value)).getDate()
 
    return (
    <div className='dailyActivityChart'>
        <div className='dailyActivityChartHeader'>
            <h2>{props.title}</h2>
            <ul>
                <li className='blackDot'>{props.legendData1}</li>
                <li className='redDot'>{props.legendData2}</li>
            </ul>
        </div>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
            data={props.data}
            margin={{
                top: 20,
                left:5
            }}
            >
                
                <CartesianGrid vertical={false} />
                <XAxis 
                    dataKey={props.xDataKey} 
                    tickLine={false}
                    tickFormatter={formattedDate}
                />
                <YAxis 
                    dataKey={props.data1} 
                    yAxisId='kilogram' 
                    orientation='right' 
                    axisLine={false} 
                    tickLine={false} 
                    domain={['dataMin-2','dataMax+2']} 
                    tickCount={5}
                />
                <YAxis 
                    dataKey={props.data2}  
                    yAxisId="calories"
                    domain={['dataMin-50','dataMax+50']}
                    hide={true} 
                />
                <Tooltip content={<CustomTooltip/>}/>
                {/* <Legend /> */}
                <Bar dataKey={props.data1} yAxisId='kilogram' fill="#282D30" barSize={10}  radius={[5,5,0,0]}/>
                <Bar dataKey={props.data2} yAxisId='calories' fill="#E60000" barSize={10}  radius={[5,5,0,0]}/>
            </BarChart>
        </ResponsiveContainer>
    </div>
    );

  }

DailyActivityChart.propTypes = {
    data: propTypes.array,
    data1: propTypes.string,
    data2: propTypes.string,
    legendData1: propTypes.string,
    legendData2: propTypes.string,
    title: propTypes.string,
    xDataKey: propTypes.string,
}

export default DailyActivityChart;