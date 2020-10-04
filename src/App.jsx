import React, { useEffect, useState } from 'react';
import './App.css';
import api from '../src/services/api';

function App() {
  const [gitUserData, setGitUserData] = useState([]);

  useEffect(() => {
    api.get("users/gustavohst")
      .then((response) => setGitUserData(response.data))
      .catch((err) => {
        console.error("An error occurred:" + err);
      });
  }, []);


  return (
    <>
      <div> {gitUserData?.name} </div>
      <div> {gitUserData?.company} </div>
    </>
  );
}

export default App;
