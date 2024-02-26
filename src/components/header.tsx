import React from 'react';

const Header: React.FC = () => {
    return (
        <div>
            <header className="bg-black text-white flex">
                <h1>Exploitation</h1>
                <ul className='flex absolute right-0'>
                    <li>
                        <a href="/modules" className=''>Vos modules</a>
                    </li>
                    <li>
                        <a href="/login" className='ml-10'>Se connecter</a>
                    </li>
                </ul>
            </header>
        </div>
    );
};

export default Header;
