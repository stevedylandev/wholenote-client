import { useParams } from 'react-router-dom';

function SharedSong() {
  // Extract userId from the URL
  const { id, type } = useParams();

  return (
    <>
      <div>
        <h1>type: {type}</h1>
        <p>track ID: {id}</p>
        {/* You can fetch user data based on userId */}
      </div>
    </>
  );
}

export default SharedSong;
