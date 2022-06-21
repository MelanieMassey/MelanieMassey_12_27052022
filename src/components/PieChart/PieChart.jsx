// import './PieChart.css';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

// const COLORS = ['#FF0000', '#FBFBFB'];

// function ScoreChart(data) {
//     //console.log(data)

//     const dataFormatted = [
//         {name: 'Score A', value: data.data},
//         {name: 'Score B', value: 1 - data.data}
//     ]

//     return(
//         <div className='todayScore'>
//             <ResponsiveContainer width="100%" height="100%">
//                 <PieChart width="100%" height="100%">
//                     <Pie
//                         data={dataFormatted}
//                         cx={120}
//                         cy={200}
//                         innerRadius={60}
//                         outerRadius={80}
//                         fill="#8884d8"
//                         paddingAngle={5}
//                         dataKey="value"
//                     >
//                         {dataFormatted.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                         ))}
//                     </Pie>

//                     {/* DEMI PIE CHART */}
//                     {/* <Pie
//                         data={dataFormatted}
//                         cx={420}
//                         cy={200}
//                         startAngle={180}
//                         endAngle={0}
//                         innerRadius={60}
//                         outerRadius={80}
//                         fill="#8884d8"
//                         paddingAngle={5}
//                         dataKey="value"
//                     >
//                         {dataFormatted.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                         ))}
//                     </Pie> */}
//                 </PieChart>
//             </ResponsiveContainer>
//         </div>
//     )
// }

// export default ScoreChart;