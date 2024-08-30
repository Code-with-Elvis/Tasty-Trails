import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const HomeLayout = () => {
  return (
    <>
      <nav>
        <Navbar />
        <Outlet />
        <footer className="py-8 bg-black text-[#bbb] text-center text-sm font-medium max-[600px]:text-sm ">
          <span>&copy; {new Date().getFullYear()} Elvis Dev, Inc.</span>
        </footer>
      </nav>
    </>
  )
}
export default HomeLayout
