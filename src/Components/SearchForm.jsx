import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const SearchForm = ({ isLoading }) => {
  const { searchTerm } = useLoaderData()
  const [value, setValue] = useState(searchTerm)

  return (
    <form className="mt-16 w-[400px] relative mx-auto max-[500px]:w-full  mb-10">
      <input
        type="text"
        name="search"
        value={value}
        placeholder="Random Meals"
        className="w-full border-[1.5px] border-green-600 h-10 focus:border-green-800 outline-none pl-4 pr-[140px] max-[500px]:pr-[100px] placeholder:text-gray-500"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className=" absolute right-[1px] -translate-y-1/2 top-1/2 px-4 h-[38px] bg-green-600 text-white font-medium text-sm disabled:cursor-not-allowed"
        disabled={isLoading}
      >
        Search <span className="max-[500px]:hidden">Image</span>
      </button>
    </form>
  )
}
export default SearchForm
