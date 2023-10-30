// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the dog image URL
        setDogImage(data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures the effect runs only once

  return (
    <div>
      <h1>Random Dog Image</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={dogImage} alt="A Random Dog" />
        </div>
      )}
    </div>
  );
}

export default App;