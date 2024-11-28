// import { Link } from "react-router-dom"



const Navigation = () => {
  return (
    <>
      <div className="h-24  flex justify-between items-center px-10">
        <div className="flex-none">Logo</div>
        <div className="flex gap-28 grow justify-center items-center">
          <a >Home</a>
          <a>Features</a>
          <a>How It Works </a>
          <a>Pricing</a>
        </div>
        <div className="flex-none text-black bg-yellow-400 py-2 px-6 rounded-md">Try to free</div>
      </div>
    </>
  )
}

export default Navigation
