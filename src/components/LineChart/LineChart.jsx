import './LineChart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function AverageSessionsChart(data) {
    //console.log(data.data)

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
    const daysArray={
        1:'L',
        2:'M',
        3:'M',
        4:'J',
        5:'V',
        6:'S',
        7:'D',
    }
    const formattedDays=(item)=>daysArray[item]

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
                        tickFormatter={formattedDays}
                        
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