// import { Link } from "react-router-dom"



const Navigation = () => {
  return (
    <>
      <header className="flex items-center justify-between p-4 md:p-6 top-0 z-10 bg-white fixed w-full">
        <div className="flex-none">
          <h1>Kasir Bali</h1>
        </div>
        <div className="flex gap-28 grow justify-center items-center">
          <a >Home</a>
          <a>Product</a>
          <a>Layanan</a>
          <a>Tentang Kami</a>
        </div>
        <div className="flex-none text-white bg-blue-800 py-2 px-6 rounded-md">Try to free</div>
      </header>
    </>
  )
}

export default Navigation
