// Write your code here
import './index.css'

const PlanetItem = props => {
  const {plantItemDetails} = props

  const {name, imageUrl, description} = plantItemDetails

  return (
    <div className="all-container">
      <img className="img-plants" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="name-heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
