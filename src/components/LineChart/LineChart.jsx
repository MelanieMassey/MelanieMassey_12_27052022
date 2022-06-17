import './LineChart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function AverageSessionsChart(data) {
    // console.log(data.data)

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
            <h2>{data.title}</h2>
            <ResponsiveContainer width="100%" height="50%">
                <LineChart
                    data={data.data}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                    }}
                >
                    <CartesianGrid vertical={false} horizontal={false}/>
                    <XAxis dataKey={data.xDataKey} 
                        tick={{ fill: '#ffffff' }} 
                        tickLine={{ stroke: '' }}
                        axisLine={{ stroke: "" }}
                        
                    />
                    <YAxis hide={true}
                    />
                    <Tooltip content={<CustomTooltip/>}/>
                    {/* <Legend /> */}
                    <Line type="monotone" dataKey={data.data1} stroke="#ffffff" dot={false}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
      );
}

export default AverageSessionsChart;