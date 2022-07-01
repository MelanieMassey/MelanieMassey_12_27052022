import './RadialChart.css'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import propTypes from 'prop-types';

/**
 * Creates a Radial Chart
 * @param {Object} props Data used to build the component
 * @param {Number} props.data Data used for the chart
 * @param {String} props.title Title of the chart
 * @returns React radial chart component using Recharts
 */
function ScoreChart(props) {
    // console.log(props)

    const scoreMax = {
        score:100,
        fill : "#FBFBFB"
    }

    const formattedData = {
            name: 'data1',
            score: props.data*100,
            fill: '#FF0000',
        }

    return (
        <div className='todayScore'>
            <h2>{props.title}</h2>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart 
                    cx="50%"
                    cy="50%"
                    innerRadius="80%"
                    outerRadius="80%"
                    barSize={10}
                    data={[scoreMax,formattedData]}
                    startAngle={90}
                    endAngle={449}
                    
                >
                <RadialBar
                    dataKey="score"
                    cornerRadius={10}
                    
                />
                <circle cx="50%" cy="50%" fill="white" r="65"></circle>
                </RadialBarChart>
            </ResponsiveContainer>
            <p>
                <span className='scorePourcentage'>{formattedData.score}%</span><br/>
                de votre<br/>
                objectif
            </p>
        </div>
    )
}

ScoreChart.propTypes = {
    data: propTypes.number,
    title: propTypes.string,
}

export default ScoreChart;