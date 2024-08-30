import { Link } from 'react-router-dom'
import LoadingImg from '../Images/Loading-img.png'

const RandomProducts = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <article className="mt-10 grid grid-cols-4 gap-3 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 pb-10">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div className="card grid place-items-center h-[300px]" key={item}>
            <img
              src={LoadingImg}
              alt="loading..."
              className="w-20 opacity-[0.4]"
            />
          </div>
        ))}
      </article>
    )
  }
  if (!data || data.length === 0) {
    return (
      <p className="font-serif text-center text-red-600">Meal is unavailable</p>
    )
  }
  return (
    <section className=" pb-10">
      <article className="mt-10 grid grid-cols-4 gap-3 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2">
        {data.slice(0, 16).map(({ idMeal, strMeal, strArea, strMealThumb }) => (
          <Link
            key={idMeal}
            to={`meal/${idMeal}`}
            className="rounded-lg overflow-hidden"
          >
            <div className=" overflow-hidden relative">
              <img src={strMealThumb} alt={strMeal} />
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
    </section>
  )
}
export default RandomProducts
