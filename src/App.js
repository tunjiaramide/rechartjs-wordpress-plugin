import React, { useState } from 'react'
import Chart from './components/Chart'
import SelectWidget from './components/SelectWidget'

const App = () => {

  const [day, setDay] = useState("7")

  return (
    <>
        <div className="chart-cover">
            <div className="chart-header">
                <h3>Graph Widget</h3>
                <SelectWidget day={day} setDay={setDay} />
            </div>
            <div className='chart-graph'>
              <Chart day={day} />
            </div>

        </div>
    </>
  )
}

export default App