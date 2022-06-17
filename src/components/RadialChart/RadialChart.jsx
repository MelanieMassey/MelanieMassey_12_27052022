import './RadialChart.css'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

function ScoreChart(data) {
    //console.log(data)

    const scoreMax = {
        score:100,
        fill : "#FFF"
    }

    const formattedData = {
            name: 'data1',
            score: data.data*100,
            fill: '#FF0000',
        }

    const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
      };
    
    return (
        <div className='todayScore'>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart 
                    cx="50%"
                    cy="50%"
                    innerRadius="10%"
                    outerRadius="80%"
                    barSize={10}
                    data={[scoreMax,formattedData]}
                    startAngle={90}
                    endAngle={449}
                >
                <RadialBar
                    // minAngle={15}
                    label={{ position: 'insideStart', fill: '#fff' }}
                    background
                    // clockWise
                    dataKey="score"
                />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ScoreChart;