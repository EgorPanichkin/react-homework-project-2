import { useSelector } from "react-redux"

export default function UserInfo() {
  const info = useSelector((state) => state.user)

  return (
    <div>
      <p>Your name: {info.user}</p>
      <p>Your age: {info.age}</p>
    </div>
  )
}
