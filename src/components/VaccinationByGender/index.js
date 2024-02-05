// Write your code here

import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {details} = props

  return (
    <div className="data-container">
      <h1 className="title">Vaccination by gender</h1>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart margin={{top: 50}} width={1000} height={400}>
          <Pie
            cx="50%"
            cy="40%"
            data={details}
            startAngle={0}
            endAngle={180}
            innerRadius="25%"
            outerRadius="60%"
            dataKey="count"
            align="center"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="middle"
            align="center"
            wrapperStyle={{paddingTop: '20%'}}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
