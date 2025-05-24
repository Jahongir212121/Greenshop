import React from 'react';
import './Plants.css';
import { NavLink, Outlet } from 'react-router-dom';

const Plants = () => {
    return (
        <main className="plants">
            <div className="plants-nav">
                <nav>
                    <nav className="flex items-center gap-8 mb-6">
                        <NavLink
                            to="/"
                            end
                            className="h-[26px] text-gray-600 hover:text-green-600 block lg:inline"
                        >
                            All Plants
                        </NavLink>
                        <NavLink
                            to="/new"
                            className="h-[26px] text-gray-600 hover:text-green-600 block lg:inline"
                        >
                            New Arrivals
                        </NavLink>
                        <NavLink
                            to="/sale"
                            className="h-[26px] text-gray-600 hover:text-green-600 block lg:inline"
                        >
                            Sale
                        </NavLink>
                    </nav>
                </nav>
                <div className="sort-by">
                    <label htmlFor="sort">Sort by: </label>
                    <select id="sort">
                        <option>Default sorting</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                </div>
            </div>
            <div className="plants-grid">
                <Outlet />
            </div>
        </main>
    );
};

export default Plants;
