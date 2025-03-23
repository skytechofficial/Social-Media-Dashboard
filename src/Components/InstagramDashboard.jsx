import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../assets/loading.svg"
import Navbar from './Navbar';

function InstagramDashboard() {
  const { username } = useParams();
  const [userStats, setUserStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://instagram-statistics-api.p.rapidapi.com/community?url=https://www.instagram.com/${username}/`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'e5055ecbebmsh18b21480c0dd8e8p1d0c06jsn010372a1676d',
          'x-rapidapi-host': 'instagram-statistics-api.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (result.meta.code === 200) {
          const stats = {
            name: result.data.name,
            screenName: result.data.screenName,
            url: result.data.url,
            description: result.data.description,
            usersCount: result.data.usersCount,
            verified: result.data.verified,
            avgInteractions: result.data.avgInteractions,
            tags: result.data.tags,
            qualityScore: result.data.qualityScore,
            image: result.data.image
          };
          setUserStats(stats);
        } else {
          setError('Failed to fetch data');
        }
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
        <img className='w-[7vw] h-[7vw] rounded-full' src={userStats.image} alt="" />
        <h1 className='text-center text-4xl mt-4 font-semibold'>{userStats.name}</h1>
        <div className="boxes w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="box w-full rounded-lg shadow-md bg-gray-50 p-4">
            <h1 className='text-lg font-semibold mb-2'>Bio:</h1>
            <h3 className='text-base'>{userStats.description || 'No bio available'}</h3>
          </div>
          <div className="box w-full rounded-lg shadow-md bg-gray-50 p-4">
            <h1 className='text-lg font-semibold mb-2'>Followers:</h1>
            <h3 className='text-base'>{userStats.usersCount}</h3>
          </div>
          <div className="box w-full rounded-lg shadow-md bg-gray-50 p-4">
            <h1 className='text-lg font-semibold mb-2'>Verified:</h1>
            <h3 className='text-base'>{userStats.verified ? 'Yes' : 'No'}</h3>
          </div>
          <div className="box w-full rounded-lg shadow-md bg-gray-50 p-4">
            <h1 className='text-lg font-semibold mb-2'>Average Interactions:</h1>
            <h3 className='text-base'>{userStats.avgInteractions}</h3>
          </div>
          <div className="box w-full rounded-lg shadow-md bg-gray-50 p-4">
            <h1 className='text-lg font-semibold mb-2'>Tags:</h1>
            <h3 className='text-base'>{userStats.tags.join(', ')}</h3>
          </div>
          <div className="box w-full rounded-lg shadow-md bg-gray-50 p-4">
            <h1 className='text-lg font-semibold mb-2'>Quality Score:</h1>
            <h3 className='text-base'>{userStats.qualityScore}</h3>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default InstagramDashboard;
