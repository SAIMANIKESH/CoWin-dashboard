// Write your code here

import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {details} = props

  const DataFormatter = num => {
    if (num >= 1000) {
      return `${(num / 1000).toString()}k`
    }
    return num.toString()
  }

  return (
    <div className="data-container">
      <h1 className="title">Vaccination Coverage</h1>
      <BarChart data={details} margin={{top: 5}} width={1000} height={500}>
        <XAxis dataKey="vaccine_date" tick={{stroke: 'gray', strokeWidth: 1}} />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{stroke: 'gray', strokeWidth: 0}}
        />
        <Legend wrapperStyle={{padding: 30}} />
        <Bar dataKey="dose_1" name="Dose1" fill="#5a8dee" barSize="20%" />
        <Bar dataKey="dose_2" name="Dose2" fill="#f54394" barSize="20%" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
