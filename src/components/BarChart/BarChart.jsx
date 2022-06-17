import './BarChart.css';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function DailyActivityChart(data) {
    //console.log(data)

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
            <h2>{data.title}</h2>
            <ul>
                <li className='blackDot'>{data.legendData1}</li>
                <li className='redDot'>{data.legendData2}</li>
            </ul>
        </div>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
            data={data.data}
            margin={{
                top: 20,
                left:5
            }}
            >
                
                <CartesianGrid vertical={false} />
                <XAxis 
                    dataKey={data.xDataKey} 
                    tickLine={false}
                    tickFormatter={formattedDate}
                />
                <YAxis 
                    dataKey={data.data1} 
                    yAxisId='kilogram' 
                    orientation='right' 
                    axisLine={false} 
                    tickLine={false} 
                    domain={['dataMin-2','dataMax+2']} 
                    tickCount={5}
                />
                <YAxis 
                    dataKey={data.data2}  
                    yAxisId="calories"
                    domain={['dataMin-50','dataMax+50']}
                    hide={true} 
                />
                <Tooltip content={<CustomTooltip/>}/>
                {/* <Legend /> */}
                <Bar dataKey={data.data1} yAxisId='kilogram' fill="#282D30" barSize={10}  radius={[5,5,0,0]}/>
                <Bar dataKey={data.data2} yAxisId='calories' fill="#E60000" barSize={10}  radius={[5,5,0,0]}/>
            </BarChart>
        </ResponsiveContainer>
    </div>
    );
  }

export default DailyActivityChart;