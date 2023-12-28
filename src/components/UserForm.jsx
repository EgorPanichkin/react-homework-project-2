import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../store/userReducer"

export default function UserForm() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [age, setAge] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addUser({
      name: name,
      age: age
    }))
    setName('')
    setAge('')
  }



  return (
    <div>
      <form className="user-form" onSubmit={e => handleSubmit(e)}>
        <label>
          Name:
          <input value={name} type="text" name="name" onChange={e => setName(e.target.value)}/>
        </label>
        <label>
          Age:
          <input value={age} type="number" name="age"  onChange={e => setAge(e.target.value)}/>
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
