import UserForm from "../components/UserForm";
import UserInfo from "../components/UserInfo";

export default function User() {
  return (
    <div className="wrapper">
      <div className="user-container">
        <UserForm />
        <UserInfo />
      </div>
    </div>
  )
}
