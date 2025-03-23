import React, { useEffect, useState } from 'react';
import Home from './Components/Home';
import GithubLogin from './Components/GithubLogin';
import InstagramLogin from './Components/InstagramLogin';
import InstagramDashboard from './Components/InstagramDashboard';

function App() {
  // const [userStats, setUserStats] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = 'https://instagram-statistics-api.p.rapidapi.com/community?url=https%3A%2F%2Fwww.instagram.com/duckybhai%2Finstagram%2F';
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'x-rapidapi-key': 'a5f9a4ea38mshf7bc35eb462dccep145106jsn50251c0e11e2',
  //         'x-rapidapi-host': 'instagram-statistics-api.p.rapidapi.com'
  //       }
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       if (result.meta.code === 200) {
  //         const stats = {
  //           name: result.data.name,
  //           screenName: result.data.screenName,
  //           url: result.data.url,
  //           description: result.data.description,
  //           usersCount: result.data.usersCount,
  //           verified: result.data.verified,
  //           avgInteractions: result.data.avgInteractions,
  //           tags: result.data.tags,
  //           qualityScore: result.data.qualityScore
  //         };
  //         setUserStats(stats);
  //       } else {
  //         setError('Failed to fetch data');
  //       }
  //     } catch (error) {
  //       setError('Error fetching data');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <div className="text-center text-xl text-gray-600">Loading...</div>;
  // }

  // if (error) {
  //   return <div className="text-center text-xl text-red-500">{error}</div>;
  // }

  return (
    <></>
  );
}

export default App;
