export default function App() {
    const menuitems = ['Home', 'about', 'contact']
    return (
        <>
        <nav className="bg-purple-400 py-5 flex justify-between px-8 items-center ">
            <a className="text-4xl text-white">Brand</a>
            <ul className="flex mx-4 pr-4 space-x-2">
                {menuitems.map((menuitem) =>
                    <li className="text-white cursor-pointer" key={menuitem.toString()}>{menuitem}</li>
                )}
            </ul>
        </nav>
        
        <div className="bg-purple-300 h-96 flex items-center">
            <div className="container px-8">
                <h1 className="text-5xl">Hero area</h1>
                <p className="w-3/6 text-xl mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, 
                reiciendis repellendus, alias eveniet, consequuntur repudiandae magnam a obca</p>
                <div className="flex flex-row mt-3">
                    <button className="px-3 py-2 bg-purple-800 rounded text-white hover:bg-white hover:text-purple-800">
                        click here
                    </button>
                </div>
            </div> 
        </div>

        </>
    )
  }