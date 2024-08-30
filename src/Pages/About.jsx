const About = () => {
  return (
    <section className="py-10 min-h-[90vh]">
      <article className="container-t font-serif">
        <h2 className="text-center font-semibold text-2xl mb-8 text-yellow-700 max-[600px]:text-start">
          About Tasty Trails
        </h2>
        <p className="leading-[1.8] text-[#333] mb-6">
          Welcome to Tasty Trails, your go-to destination for discovering
          delicious recipes from all around the world. Our mission is to inspire
          your culinary adventures by bringing together a diverse collection of
          dishes that cater to all tastes and skill levels.
        </p>
        <h3 className="mb-6 text-center font-semibold text-lg underline text-[#333] max-[600px]:text-start">
          What We Offer
        </h3>
        <p className="text-[#333] leading-[1.8] mb-4">
          <span className="text-green-800 font-medium">Diverse Recipes:</span>{' '}
          From quick and easy meals to gourmet dishes, our recipes cover a wide
          range of cuisines and dietary preferences.
        </p>
        <p className="text-[#333] leading-[1.8] mb-4">
          <span className="text-green-800 font-medium">Ingredient Guides:</span>{' '}
          Detailed ingredient lists and tips to help you source the best
          products for your meals.
        </p>
        <p className="text-[#333] leading-[1.8] mb-4">
          <span className="text-green-800 font-medium">Cooking Tips:</span>{' '}
          Helpful advice and techniques to elevate your cooking skills.
        </p>
      </article>
    </section>
  )
}
export default About
