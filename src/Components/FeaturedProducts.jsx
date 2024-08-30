import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PosterImage from '../Images/poster.jpg'

const FeaturedProducts = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/search.php?s='
      )
      return data.meals
    },
  })

  if (isPending) {
    return <div className="spinner mx-auto"></div>
  }
  if (isError) {
    return (
      <div className="text-center font-serif mt-5 ">
        Sorry, Something went wrong
      </div>
    )
  }

  return (
    <section className="bg-yellow-100 py-10 font-serif">
      <article className="container-t">
        <h2 className="text-2xl text-center mb-6 font-semibold text-yellow-800">
          Featured Products
        </h2>

        <article className="mt-10 grid grid-cols-4 gap-3 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2">
          {data
            .slice(0, 8)
            .map(({ idMeal, strMeal, strArea, strMealThumb }) => (
              <Link
                key={idMeal}
                to={`products/meal/${idMeal}`}
                className="rounded-lg overflow-hidden"
              >
                <div className=" overflow-hidden relative">
                  <img src={strMealThumb || PosterImage} alt={strMeal} />
                  <span className="absolute top-0 right-0 tag text-sm">
                    {strArea}
                  </span>
                  <span className=" absolute bottom-0 left-0 right-0 inline-block px-4 py-2.5 bg-[#22222284] text-white text-sm">
                    {strMeal}
                  </span>
                </div>
              </Link>
            ))}
        </article>
      </article>
    </section>
  )
}
export default FeaturedProducts
