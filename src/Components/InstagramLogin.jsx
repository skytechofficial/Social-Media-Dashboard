import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function InstagramLogin() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const url = "https://www.citypng.com/public/uploads/preview/hd-official-outline-instagram-ig-logo-icon-png-701751694786948nms5td2hyk.png";

    const handleLogin = () => {
        if (username) {
            navigate(`/instagramDashboard/${username}`);
        }
    };

    return (
        <div className=''>
            <Navbar />
            <div className="github w-full p-4 justify-center items-center flex">
                <div className="login-box mt-32 rounded-lg shadow-xl bg-white p-4 justify-center items-center gap-[1vw] flex flex-col">
                    <img className='h-[4vw] w-[4vw]' src={url} alt="" />
                    <input
                        type="text"
                        placeholder='Enter Insta Username'
                        className='border border-[2px] border-[#FF00C0] p-4 rounded-sm'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button
                        onClick={handleLogin}
                        className='px-4 py-2 bg-gradient-to-r from-[#D62976] to-[#F9A800] text-white mt-4 rounded-sm font-[poppins] font-semibold'
                    >
                        Login to Instagram
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InstagramLogin;
