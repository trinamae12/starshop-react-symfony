import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = ({ handleSearch }) => {
    return (
        <header className="h-[114px] shrink-0 flex flex-col sm:flex-row items-center sm:justify-between py-4 sm:py-0 px-6 border-b border-white/20 shadow-md">
        <Link href="/">
            <img className="h-[42px]" src="/images/starshop-logo.png" alt="starshop logo" />
        </Link>
        <div>
            <SearchBar onSearch={handleSearch}/>
        </div>
        <nav className="flex space-x-4 font-semibold">
            <a className="hover:text-amber-400 pt-2" href="#">
                Home
            </a>
            <a className="hover:text-amber-400 pt-2" href="#">
                About
            </a>
            <a className="hover:text-amber-400 pt-2" href="#">
                Contact
            </a>
            <a className="rounded-[60px] py-2 px-5 bg-white/10 hover:bg-white/20" href="#">
                Get Started
            </a>
        </nav>
    </header>
    );
}

export default Header;