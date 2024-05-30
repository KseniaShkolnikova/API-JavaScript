import React from 'react';
import Card from './card';

function Searchresult({ results }) {
  return (
    <div className="searchres">
      {results.length > 0 ? (
        results.map((song) => <Card key={song.id} song={song} />)
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Searchresult;