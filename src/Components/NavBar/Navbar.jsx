import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => {
    
    return (
        <div className="flex justify-between items-center relative mt-12">
            <div>
               <Logo></Logo>
            </div>
            <ul className="flex gap-12 text-xl font-normal">
                <li>
                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : "" }>Home</NavLink>
                </li>
                <li>
                <NavLink to="/donations" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>Donation</NavLink>
                </li>
                <li>
                <NavLink to="/statistics" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>Statistics</NavLink>
                </li>
            </ul>            
        </div>
    );
};

export default Navbar;