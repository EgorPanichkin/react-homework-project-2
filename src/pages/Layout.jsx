import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import clsx from "clsx";

export default function Layout() {
  const isDark = useSelector((state) => state.theme.dark)

  return (
    <div className={clsx('main', isDark && 'dark')}>
      <nav>
        <NavBar />
      </nav>
      <Outlet />
    </div>
  )
}
