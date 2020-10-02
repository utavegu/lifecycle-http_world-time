import React, {useState} from 'react'
import AddClocksForm from './AddClocksForm'
import ClockModel from '../models/ClockModel'

function WorldTime() {
  const [clocks, setClocks] = useState([
    new ClockModel("Москва", 3),
    new ClockModel("Екатеринбург", 5),
  ])

  /*
    1) Реализовать отрисовку часов
    2) Сделать валидацию через регулярные выражения
  */

  console.log(clocks);
  const handleAdd = (data) => {
    setClocks(prevState => [...prevState, new ClockModel(data.city, data.utc)])
    // Почему-то в классовом компоненте такая штука не сработала. Точнее срабатывала только один раз, а потом выдавала ошибку. Буду признателн за подсказку, как это правильно делать в классовых компонентах, раз уж это задание я решил выполнять целиком на них.
  }

  return (
    <React.Fragment>
        <AddClocksForm onAdd={handleAdd} />
    </React.Fragment>
  )
}

export default WorldTime
