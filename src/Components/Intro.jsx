import { Link } from 'react-router-dom'
import IntroImg from '../Images/intro-img.png'

const Intro = () => {
  return (
    <section className="py-10">
      <article className="container-t grid grid-cols-2 gap-5 items-center max-[1000px]:grid-cols-[1.5fr,2fr] max-[850px]:flex max-[850px]:flex-col-reverse">
        <div>
          <img src={IntroImg} alt="intro image" className="max-w-full" />
        </div>
        <div className="font-serif">
          <h2 className="text-2xl mb-6 font-semibold text-yellow-700">
            Explore New Recipes Every Day
          </h2>
          <p className="leading-[2] text-[#222]">
            From traditional dishes to modern culinary creations, our recipes
            come with detailed instructions and a list of ingredients to make
            cooking easier and more enjoyable. No matter your skill level,
            you&apos;ll find recipes that inspire you to try something new in
            the kitchen.
          </p>
          <Link
            to="products?search=cake"
            className="inline-block text-[15px] font-serif mt-10 rounded-md  py-1.5 px-4 font-medium outline outline-[2px] outline-green-600 outline-offset-2 text-green-600 mr-4"
          >
            Cakes
          </Link>
          <Link
            to="products?search=beef"
            className="inline-block text-[15px] font-serif mt-10 rounded-md  py-1.5 px-4 font-medium outline outline-[2px] outline-green-600 outline-offset-2 text-green-600 mr-4"
          >
            Beef
          </Link>
          <Link
            to="products?search=soup"
            className="inline-block text-[15px] font-serif mt-10 rounded-md  py-1.5 px-4 font-medium outline outline-[2px] outline-green-600 outline-offset-2 text-green-600 mr-4"
          >
            Soup
          </Link>
          <Link
            to="products?search=fish"
            className="inline-block text-[15px] font-serif mt-10 rounded-md  py-1.5 px-4 font-medium outline outline-[2px] outline-green-600 outline-offset-2 text-green-600"
          >
            Fish
          </Link>
        </div>
      </article>
    </section>
  )
}
export default Intro
