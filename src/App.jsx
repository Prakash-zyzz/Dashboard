import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import Leftcolumn from "./Components/Leftcolumn"
import Rightcolumn from "./Components/Rightcolumn"


function App() {
  

  return (
    <main className="flex">
    <Sidebar />
    
    <div className="flex flex-col flex-1 relative">
    <Navbar />
    <div className="grid md:grid-cols-3 grid-cols-1 w-full">
       <div className="col-span-2">
        <Leftcolumn />
       </div>
       <div className="w-full">
       <Rightcolumn />
       </div>
    </div>
    </div>

    

    </main>
  )
}

export default App
