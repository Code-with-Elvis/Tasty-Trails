import { useQuery } from '@tanstack/react-query'
import RandomProducts from '../Components/RandomProducts'
import SearchForm from '../Components/SearchForm'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
const mealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const searchMealsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const {
        data: { meals },
      } = await axios.get(`${mealUrl}${searchTerm}`)
      return meals
    },
  }
}

export const loader = async ({ request }) => {
  const url = new URL(request.url)
  const searchTerm = url.searchParams.get('search') || ''

  return { searchTerm }
}

const ProductsLanding = () => {
  const { searchTerm } = useLoaderData()
  const { data, isLoading } = useQuery(searchMealsQuery(searchTerm))
  return (
    <section className="min-h-[90vh] container-t">
      <SearchForm isLoading={isLoading} />
      <RandomProducts isLoading={isLoading} data={data} />
    </section>
  )
}
export default ProductsLanding
