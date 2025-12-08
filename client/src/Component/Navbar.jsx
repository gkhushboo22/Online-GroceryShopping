import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../Content/AppContext'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { user, setUser, setShowUserLogin, navigate, setSearchQuery, searchQuery, getCartCount, getCartAmount } = useAppContext();
    const logout = async () => {
        setUser(false)
        setOpen(false);
        navigate("/");

    }
    useEffect(() => {
        if (searchQuery.length > 0) {
            navigate("/products")
        }
    }, [searchQuery])

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to={"/"} onClick={() => setOpen(false)}>
                <img width="157" height="40" viewBox="0 0 157 40" fill="none" src={assets.logo}>
                </img>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/products"}>All Products</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input onChange={(e) => setSearchQuery(e.target.value)} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <img width="16" height="16" viewBox="0 0 16 16" fill="none" src={assets.search_icon}>
                    </img>
                </div>

                <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
                    <img width="18" height="18" viewBox="0 0 14 14" fill="none" src={assets.cart_icon}>
                    </img>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div>

                {!user ? (<button onClick={() => { setShowUserLogin(true) }} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                    Login
                </button>) : (
                    <div className='relative group transition-all'>
                        <img src={assets.profile_icon} alt="myprofile" className='w-10' />
                        <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-100 py-2.5 w-30 rounded-md text-sm z-40'>
                            <li onClick={() => navigate("my-orders")} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>My Orders</li>
                            <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>Log Out</li>
                        </ul>
                    </div>
                )}
            </div>
            <div className='flex items-center gap-6 sm:hidden'>
                <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
                    <img width="18" height="18" viewBox="0 0 14 14" fill="none" src={assets.cart_icon}>
                    </img>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div>

                <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="">
                    {/* Menu Icon SVG */}
                    <img src={assets.menu_icon} alt="menu" />
                </button>


            </div>
            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-40`}>
                <NavLink to={"/"} className="block" onClick={() => setOpen(false)}>Home</NavLink>
                <NavLink to={"/products"} className="block" onClick={() => setOpen(false)}>Products</NavLink>
                {user && <NavLink to={"/order"} className="block" onClick={() => setOpen(false)}>My Orders</NavLink>}
                <NavLink to={"/contact"} className="block" >Contact</NavLink>
                {!user ? (<button className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm" onClick={() => {
                    setOpen(false);
                    setShowUsetLogin(true)
                }}>
                    Login
                </button>) : (
                    <button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                        LogOut
                    </button>

                )
                }
            </div>

        </nav>
    )
}

export default Navbar
