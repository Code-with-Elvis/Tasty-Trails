import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import {
  About,
  Error,
  HomeLayout,
  Landing,
  Meal,
  Newsletter,
  Products,
  ProductsLanding,
  SingleError,
} from './Pages'

import { loader as ProductsLoader } from './Pages/ProductsLanding'
import { loader as SingleProductLoader } from './Pages/Meal'
import { action } from './Pages/Newsletter'
import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />} errorElement={<Error />}>
      <Route index element={<Landing />} errorElement={<SingleError />} />
      <Route path="about" element={<About />} errorElement={<SingleError />} />
      <Route
        path="newsletter"
        element={<Newsletter />}
        errorElement={<SingleError />}
        action={action}
      />
      <Route
        path="products"
        element={<Products />}
        errorElement={<SingleError />}
      >
        <Route
          index
          element={<ProductsLanding />}
          errorElement={<SingleError />}
          loader={ProductsLoader}
        ></Route>
        <Route
          path="meal/:id"
          element={<Meal />}
          loader={SingleProductLoader(queryClient)}
          errorElement={<SingleError />}
        />
      </Route>
    </Route>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App
