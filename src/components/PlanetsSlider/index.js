// Write your code here

import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div data-testid="planets" className="plants-container">
      <h1 className="plants-heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} plantItemDetails={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
