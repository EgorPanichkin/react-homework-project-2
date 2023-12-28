import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

export default function NavBar() {
  const dispatch = useDispatch()

  const handleThemeToggle = (e) => {
    dispatch({type: "SWITCH_THEME", payload: e.target.checked})
  }

  return (
    <div className="wrapper">
      <div className="nav-container">
        <Link className="nav-item" to='/'>Home</Link>
        <Link className="nav-item" to='/Counter'>Counter</Link>
        <Link className="nav-item" to='/User'>User</Link>
        <label>
          Dark theme:
          <input onChange={handleThemeToggle} type="checkbox" name="DarkTheme" id="themeSelector"/>
        </label>
      </div>
    </div>
  )
}
