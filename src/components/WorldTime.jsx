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
    /*
    ЭДГАРУ
    Доброго дня! В процессе выполнения этого задания у меня возникло 2 вопроса:
    1) Почему-то в классовом компоненте такая штука не сработала. Точнее срабатывала только один раз, а потом выдавала ошибку. Буду признателн за подсказку, как это правильно делать в классовых компонентах, раз уж это задание я решил выполнять целиком на них.
    2) Не понимаю, почему первую секунду у меня вместо значений часов показываются NaN
    */
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
