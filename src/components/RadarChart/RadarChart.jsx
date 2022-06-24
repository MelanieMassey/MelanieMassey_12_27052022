import './RadarChart.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import propTypes from 'prop-types';

/**
 * 
 * @param {Object} props Necessary data to use the component
 * @prop {Object} data Data used to build the chart
 * @prop {String} angleDataKey Data used for the PolarAngleAxis
 * @prop {String} chartDataKey Data used for the RadarChart
 * @returns React radar chart component using Recharts
 */
function ActivityTypeChart(props) {
    // console.log(props)
    // const formattedKinds=(item)=>kinds[item]

    return (
        <div className='activityType'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={props.data}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis 
                        dataKey={props.angleDataKey} 
                        // tickFormatter={props.kind}
                        tick={{ fill: '#ffffff' }}
                    />
                    <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
                    <Radar name="ActivityType" dataKey={props.chartDataKey} stroke="" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
        
      );
}

ActivityTypeChart.propTypes = {
    data: propTypes.array,
    angleDataKey: propTypes.string,
    chartDataKey: propTypes.string,
}

export default ActivityTypeChart;