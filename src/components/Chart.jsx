import { LineChart, Line, CartesianGrid, XAxis, YAxis,  } from 'recharts';

const data = {
    "7": [
      { name: 'Page A', amt: 400 },
      { name: 'Page B', amt: 600 },
      { name: 'Page C', amt: 300 },
      { name: 'Page D', amt: 100 },
    ],
    "15": [
      { name: 'Page A', amt: 450 },
      { name: 'Page B', amt: 550 },
      { name: 'Page C', amt: 350 },
      { name: 'Page D', amt: 150 },
    ],
    "30": [
      { name: 'Page A', amt: 500 },
      { name: 'Page B', amt: 500 },
      { name: 'Page C', amt: 400 },
      { name: 'Page D', amt: 100 },
    ],
  };



const Chart = ({ day }) => {
    const renderLineChart = (
        <LineChart width={400} height={300} data={data[day]}>
            <Line type="monotone" dataKey="amt" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
    );

  return (
    <div>{renderLineChart}</div>
  )
}

export default Chart