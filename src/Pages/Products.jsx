import { Outlet, useNavigation } from 'react-router-dom'
import ScrollToTop from '../Components/ScrollTop'

const Products = () => {
  let navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'

  return (
    <div className="min-h-[90vh]">
      {isPageLoading ? (
        <div className="spinner mx-auto my-10"></div>
      ) : (
        <Outlet />
      )}
      <ScrollToTop />
    </div>
  )
}
export default Products
