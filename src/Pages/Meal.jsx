import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
const mealUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

const searchMealQuery = (id) => {
  return {
    queryKey: ['search', id],
    queryFn: async () => {
      const {
        data: { meals },
      } = await axios.get(`${mealUrl}${id}`)
      return meals
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ params }) => {
    let id = params.id
    await queryClient.ensureQueryData(searchMealQuery(id))
    return id
  }

const Meal = () => {
  const id = useLoaderData()
  const { data: meals, isLoading } = useQuery(searchMealQuery(id))

  if (isLoading) {
    return (
      <article className="container-t grid grid-cols-2 py-10 gap-8 items-start max-[700px]:grid-cols-1">
        <div className="card h-[250px]"></div>
        <div className="w-full">
          <span className="card inline-block w-full h-[60px] mb-2"></span>
          <span className="card inline-block w-full h-[140px] mb-2"></span>
          <span className="card inline-block w-full h-[100px] mb-2"></span>
        </div>
      </article>
    )
  }

  if (!meals || meals.length === 0) {
    return (
      <p className="font-serif text-center text-red-600">Meal is unavailable</p>
    )
  }

  let { strArea, strMeal, strMealThumb, strInstructions, strYoutube } = meals[0]

  let validIngredients = Object.keys(meals[0])
    .filter(
      (key) =>
        key.startsWith('strIngredient') &&
        meals[0][key] !== '' &&
        meals[0][key] !== null
    )
    .map((item) => meals[0][item])

  return (
    <section className="container-t">
      <article className="grid grid-cols-2 py-10 gap-8 items-start max-[700px]:grid-cols-1">
        <div className=" overflow-hidden sticky top-[20px] rounded-lg font-serif max-[720px]:relative">
          <img
            src={strMealThumb}
            alt={strMeal}
            className="w-full h-[450px] object-cover max-[900px]:h-auto"
          />
          <span className="absolute top-0 right-0 tag text-sm">{strArea}</span>
        </div>
        <div className="pt-4 font-serif">
          <h2 className="text-xl mb-4 font-semibold">{strMeal}</h2>
          <p className="mb-4 text leading-[1.8] text-[#333]">
            <span className="text-red-500 font-semibold">Ingredients: </span>
            {validIngredients.map((item, index) => (
              <span key={index}>
                {item}
                {index < validIngredients.length - 1 ? ',' : ''}
              </span>
            ))}
          </p>
          <p className="text-[#333] leading-[1.8]">{strInstructions}</p>
          <a
            href={strYoutube}
            className="inline-block mt-8 px-16 py-2.5 text-white bg-green-600 rounded-md"
            target="_blank"
          >
            Watch Video
          </a>
        </div>
      </article>
    </section>
  )
}
export default Meal
