import Link from "next/link"

const NavLink=({href,title})=>{
    console.log(href);
    return(

        <Link href={href}
         className="text-white text-lg font-semibold hover:text-gray-400 cursor-pointer">
            {title}       
        </Link>
    )};
export default NavLink; 
