import { Link } from 'react-router-dom'
import HeroMedia from '../Images/banner-video.mp4'
import PosterImg from '../Images/poster.jpg'

const Hero = () => {
  return (
    <section className="min-h-[90vh] relative">
      <div className="overlay"></div>
      <video
        className=" w-full h-full object-cover absolute inset-0"
        autoPlay={true}
        loop
        muted
        poster={PosterImg}
      >
        <source src={HeroMedia} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <article className="relative z-20 container-t flex flex-col items-center justify-center min-h-[90vh] text-white">
        <h1 className="text-4xl max-[600px]:text-3xl text-center font-serif font-semibold mb-5">
          Welcome to Tasty Trails
        </h1>
        <p className="font-serif leading-[1.8] text-center">
          Discover a world of flavors with our curated collection of delicious
          recipes from around the globe.
        </p>
        <Link
          to="products"
          className="inline-block text-[15px] font-serif mt-10 rounded-md btn  py-2.5 px-14 font-medium outline outline-[2px] outline-green-600 outline-offset-2 max-[600px]:px-8 max-[600px]:py-1.8 max-[600px]:text-sm whitespace-nowrap"
        >
          Explore Products
        </Link>
      </article>
    </section>
  )
}
export default Hero
