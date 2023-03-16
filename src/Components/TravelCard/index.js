import './index.css'

const TravelCard = props => {
  const {eachList} = props
  const {name, description, imageUrl} = eachList
  return (
    <li>
      <div className="container-card">
        <img src={imageUrl} alt={name} className="image" />
        <h1 className="card-heading">{name}</h1>
        <p className="card-description">{description}</p>
      </div>
    </li>
  )
}

export default TravelCard
