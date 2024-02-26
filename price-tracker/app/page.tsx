import HeroCorosel from "@/components/HeroCorosel"
import SearchBar from "@/components/SearchBar"
import Image from "next/image"



const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Start Here:
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}

              />

            </p>
            <h1 className="head-text">
              Unleash The Power Of <span className="text-primary">PriceWise</span>
            </h1>
            <p className="mt-6">
              Powerful
            </p>
            <SearchBar />
          </div>

          <HeroCorosel />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {["Sneaker", "Macbook", "IP15"].map((product) => (
            <div key={product}>
              {product}
            </div>

          ))}
        </div>
      </section>
    </>
  )
}

export default Home