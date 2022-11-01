import {useState} from 'react'
import Card from '../UI/Card'
import './GoalInput.css'

const GoalInput = props => {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function updateGoalTextHandler(event) {
    setEnteredGoalText(event.target.value)
  }

  function goalSubmitHandler(event) {
    event.preventDefault()

    if (enteredGoalText.trim().length === 0) {
      alert('Invalid text - please enter a longer one!')
      return
    }

    props.onAddGoal(enteredGoalText)

    setEnteredGoalText('')
  }

  return (
    <section id='goal-input'>
      <Card>
        <form onSubmit={goalSubmitHandler}>
          <label htmlFor='text'>New Goal</label>
          <input
            type='text'
            id='text'
            value={enteredGoalText}
            onChange={updateGoalTextHandler}
          />
          <button>Add Goal</button>
        </form>
      </Card>
    </section>
  )
}

export default GoalInput
