import './RadarChart.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function ActivityTypeChart(data) {
    //console.log(data)
    // const formattedKinds=(item)=>kinds[item]

    return (
        <div className='activityType'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.data}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis 
                        dataKey="kind" 
                        tickFormatter={data.kind}
                        tick={{ fill: '#ffffff' }}
                    />
                    <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
                    <Radar name="ActivityType" dataKey="value" stroke="" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
        
      );
}

export default ActivityTypeChart;