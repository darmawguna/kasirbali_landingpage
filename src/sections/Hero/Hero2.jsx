

const Hero2 = () => {
  return (
      <div className="flex flex-col items-center pt-28 justify-center px-7  h-full">
          {/* Image Tablet */}
          <div className="relative w-11/12 max-w-4xl my-10">
              <img
                  src="/src/assets/tablet.png" // Pastikan path benar
                  alt="Tablet Frame showcasing content"
                  className="w-full h-full rounded-3xl shadow-lg object-cover"
              />
          </div>
      </div>
  )
}

export default Hero2
