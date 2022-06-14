import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#FF0000', '#FBFBFB'];

function ScoreChart(data) {
    console.log(data)

    const dataFormatted = [
        {name: 'Score A', value: data.data},
        {name: 'Score B', value: 1 - data.data}
    ]

    console.log(dataFormatted)

    return(
        <PieChart width={250} height={250}>
            <Pie
                data={dataFormatted}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
            >
                {dataFormatted.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Pie
                data={dataFormatted}
                cx={420}
                cy={200}
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
            >
                {dataFormatted.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    )
}

export default ScoreChart;