import React from "react"
import { Link } from "react-router-dom"
// @ts-ignore
const Navbar = ({toggle}) =>{
    return(
       <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-montserrat' role ='navigation'>
           <div className="div.px-4.cursor-pointer md:hidden"
           onClick={toggle}>
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
           </div>

           <div className="pr-8 md:block hidden">
              <button className="'bg-gray-900 text-white' : 'text-gray-300 hover:bg-purple-100 hover:text-white',
                          'px-3 py-2 rounded-md text-sm'">
                  <Link className="p-10 button" to="/">Ryan Driver</Link>
</button> 
</div>
<div>


              <button className="'bg-gray-900 text-white' : 'text-gray-300 hover:bg-purple-100 hover:text-white',
                          'px-3 py-2 rounded-md text-sm">
                            <Link className="p-6" to="/about">About</Link>

</button> 
              <button className="'bg-gray-900 text-white' : 'text-gray-300 hover:bg-purple-100 hover:text-white',
                          'px-3 py-2 rounded-md text-sm '">
               <Link className="p-6" to="/portfolio">Portfolio</Link>
</button> 
              <button className="'bg-gray-900 text-white' : 'text-gray-300 hover:bg-purple-100 hover:text-white',
                          'px-3 py-2 rounded-md text-sm '">
               <Link className="p-6" to="/contact">Contact</Link>
</button> 
     
           </div>
       </nav>
    )
}

export default Navbar;