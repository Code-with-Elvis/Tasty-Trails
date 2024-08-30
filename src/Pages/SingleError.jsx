import { useNavigate, useRouteError } from 'react-router-dom'
import ErrorImage from '../Images/error-img.png'

const SingleError = () => {
  const error = useRouteError()
  const navigate = useNavigate()
  if (error.status === 404) {
    return (
      <div className="pt-20 text-center w-full">
        <img
          src={ErrorImage}
          alt="error-image"
          className="block mx-auto max-w-[400px] max-[600px]:w-full"
        />
        <p className="text-center font-serif">We can&apos;t find this page</p>
        <button
          className="text-sm py-2.5 px-10 bg-green-600 rounded-md text-white font-serif font-medium mt-8"
          onClick={() => {
            navigate('/')
          }}
        >
          Back Home
        </button>
      </div>
    )
  }
  return (
    <div className="text-center mt-8 font-serif">
      Sorry! Something went wrong: <span>{error.message}</span>
    </div>
  )
}
export default SingleError
