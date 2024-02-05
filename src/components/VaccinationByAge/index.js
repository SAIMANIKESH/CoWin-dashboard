// Write your code here

import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {details} = props

  return (
    <div className="data-container">
      <h1 className="title">Vaccination by age</h1>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart margin={{top: 5}} width={1000} height={400}>
          <Pie
            cx="50%"
            cy="40%"
            data={details}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="55%"
            dataKey="count"
            align="center"
          >
            <Cell name="18-44" fill="#5a8dee" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="middle"
            align="center"
            wrapperStyle={{paddingTop: '30%'}}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
