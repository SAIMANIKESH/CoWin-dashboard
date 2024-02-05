// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const apiStatusObj = {
  initial: 'Initial',
  inProgress: 'InProgress',
  success: 'Success',
  failed: 'Failed',
}

class CowinDashboard extends Component {
  state = {apiStatus: apiStatusObj.initial, vaccinationData: {}}

  componentDidMount() {
    this.getVaccinationDetails()
  }

  getVaccinationDetails = async () => {
    this.setState({apiStatus: apiStatusObj.inProgress})

    const url = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(url)

    if (response.ok === true) {
      /* const formattedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }

      console.log(data) */
      const data = await response.json()

      this.setState({
        apiStatus: apiStatusObj.success,
        vaccinationData: data,
      })
    } else {
      this.setState({apiStatus: apiStatusObj.failed})
    }
  }

  renderLoadingView = () => (
    <div data-testid="loader" className="loader-view-container">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="failure-heading-text">Something Went Wrong</h1>
    </div>
  )

  renderSuccessView = () => {
    const {vaccinationData} = this.state

    return (
      <>
        <VaccinationCoverage
          details={vaccinationData.last_7_days_vaccination}
        />
        <VaccinationByGender details={vaccinationData.vaccination_by_gender} />
        <VaccinationByAge details={vaccinationData.vaccination_by_age} />
      </>
    )
  }

  renderSpecificView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'InProgress':
        return this.renderLoadingView()
      case 'Success':
        return this.renderSuccessView()
      case 'Failed':
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="container">
        <div className="app-container">
          <div className="logo-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="logo-img"
            />
            <h1 className="logo-heading">Co-WIN</h1>
          </div>
          <h1 className="main-heading">CoWIN Vaccination in India</h1>
          {this.renderSpecificView()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
