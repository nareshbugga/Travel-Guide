import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TravelCard from '../TravelCard'

class TravelGuide extends Component {
  state = {travelList: [], display: true}

  componentDidMount() {
    this.getTravelData()
  }

  getTravelData = async () => {
    const TravelApiUrl = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(TravelApiUrl)
    const data = await response.json()
    const {packages} = data
    const updateData = packages.map(eachList => ({
      id: eachList.id,
      name: eachList.name,
      imageUrl: eachList.image_url,
      description: eachList.description,
    }))
    this.setState({travelList: updateData, display: false})
  }

  render() {
    const {travelList, display} = this.state
    return (
      <div className="container">
        <div>
          {display ? (
            <div data-testid="loader" className="loader-container">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <>
              <h1 className="heading">Travel Guide</h1>
              <ul className="list-container">
                {travelList.map(eachList => (
                  <TravelCard eachList={eachList} key={eachList.id} />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}
export default TravelGuide
