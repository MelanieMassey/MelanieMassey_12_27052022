import './RadarChart.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import propTypes from 'prop-types';

/**
 * 
 * @param {Object} props Necessary data to use the component
 * @param {Object} props.data Data used to build the chart
 * @param {String} props.angleDataKey Data used for the PolarAngleAxis
 * @param {String} props.chartDataKey Data used for the RadarChart
 * @returns React radar chart component using Recharts
 */
function CreateRadarChart(props) {
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
                    <Radar 
                        name="ActivityType" 
                        dataKey={props.chartDataKey} 
                        stroke="" 
                        fill="#FF0101" 
                        fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
      );
}

CreateRadarChart.propTypes = {
    data: propTypes.array,
    angleDataKey: propTypes.string,
    chartDataKey: propTypes.string,
}

export default CreateRadarChart;