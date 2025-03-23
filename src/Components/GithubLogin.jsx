import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'

function GithubLogin() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const handleLogin = () => {
      if (username) {
        // Remove the ':' before navigating
        navigate(`/githubDashboard/${username}`);
      }
    };
    
  return (
    <div className=''>
        <Navbar />
      <div className="github w-full p-4 justify-center items-center flex">
<div className="login-box mt-32 rounded-lg shadow-xl bg-white p-4 justify-center items-center gap-[1vw] flex flex-col">
<svg height="62" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="62" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
</svg>
<input
                        type="text"
                        placeholder='Enter Github Username'
                        className='border border-[2px] border-black p-4 rounded-sm'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
<button onClick={handleLogin} className='px-4 py-2 bg-[#000000] text-white mt-4 rounded-sm font-[poppins] font-semibold'>Login to Github</button>
</div>
      </div>
    </div>
  )
}

export default GithubLogin
