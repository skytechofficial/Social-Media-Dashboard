import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../assets/loading.svg"
import Navbar from './Navbar';

function GithubDashboard() {
  const [userStats, setUserStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { username } = useParams();

  // This will fetch without a colon in the URL
  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
  
        if (response.ok) {
          setUserStats(data);
          setLoading(false);
        } else {
          setError('User not found');
          setLoading(false);
        }
      } catch (err) {
        setError('An error occurred');
        setLoading(false);
      }
    };
  
    fetchUserStats();
  }, [username]);
  
  if (loading) {
    return <div className="text-center text-xl text-gray-600 flex justify-center items-center"><img className='mt-32' src={Loading}alt="" /></div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

  return (
    <>
    <Navbar />
    <div className='w-full min-h-screen bg-gray-100 p-6 flex flex-col items-center'>
      <div className="w-full max-w-screen-md bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
        <img
          className='w-32 h-32 rounded-full object-cover mb-4'
          src={userStats.avatar_url}
          alt={userStats.login}
        />
        <h1 className='text-center text-4xl mt-4 font-semibold'>{userStats.login}</h1>
        <div className="boxes w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="box w-full rounded-lg shadow-md bg-gray-50 p-4">
            <h1 className='text-lg font-semibold mb-2'>Bio:</h1>
            <h3 className='text-base'>{userStats.bio || 'No bio available'}</h3>
          </div>
          <div className="box w-full rounded-lg shadow-md bg-gray-50 p-4">
            <h1 className='text-lg font-semibold mb-2'>Followers:</h1>
            <h3 className='text-base'>{userStats.followers}</h3>
          </div>
          <div className="box w-full rounded-lg shadow-md bg-gray-50 p-4">
            <h1 className='text-lg font-semibold mb-2'>Following:</h1>
            <h3 className='text-base'>{userStats.following}</h3>
          </div>
          <div className="box w-full rounded-lg shadow-md bg-gray-50 p-4">
            <h1 className='text-lg font-semibold mb-2'>Public Repos:</h1>
            <h3 className='text-base'>{userStats.public_repos}</h3>
          </div>
          <div className="box w-full rounded-lg shadow-md bg-gray-50 p-4">
            <h1 className='text-lg font-semibold mb-2'>Location:</h1>
            <h3 className='text-base'>{userStats.location || 'Not specified'}</h3>
          </div>
          <div className="box w-full rounded-lg shadow-md bg-gray-50 p-4">
            <h1 className='text-lg font-semibold mb-2'>Company:</h1>
            <h3 className='text-base'>{userStats.company || 'Not specified'}</h3>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default GithubDashboard;
