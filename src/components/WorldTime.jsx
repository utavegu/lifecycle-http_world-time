import React, {useState} from 'react'
import AddClocksForm from './AddClocksForm'
import ClockModel from '../models/ClockModel'
import Wall from './Wall'


function WorldTime() {
  const [clocks, setClocks] = useState([
    new ClockModel("Москва", 3),
    new ClockModel("Екатеринбург", 5),
    new ClockModel("Торонто", -4),
    new ClockModel("Амстердам", 2),
    new ClockModel("Токио", 9),
    new ClockModel("Аляска", -8),
  ])

  const handleAdd = (data) => {
    setClocks(prevState => [...prevState, new ClockModel(data.city, data.utc)])
  }

  const handleRemove = id => {
    setClocks(prevState => prevState.filter((currentItem, currentId) => currentId !== id));
  }

  return (
    <React.Fragment>
        <AddClocksForm onAdd={handleAdd} />
        <Wall data={clocks} onRemove={handleRemove} />
    </React.Fragment>
  )
}

export default WorldTime
