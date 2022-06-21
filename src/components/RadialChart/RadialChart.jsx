import './RadialChart.css'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

function ScoreChart(data) {
    console.log(data)

    const scoreMax = {
        score:100,
        fill : "#FBFBFB"
    }

    const formattedData = {
            name: 'data1',
            score: data.data*100,
            fill: '#FF0000',
        }

    return (
        <div className='todayScore'>
            <h2>{data.title}</h2>
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
                <circle cx="50%" cy="50%" fill="white" r="80"></circle>
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

export default ScoreChart;