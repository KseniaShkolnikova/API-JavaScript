import React from 'react';

function Card({ song }) {
  return (
    <div className="song-card">
      <img src={song.album.images[0].url} alt={`${song.name} cover`} />
      <a href={song.spotify}>
        <h3>{song.name}</h3>
      </a>
        {song.preview_url && (
        <audio controls src={song.preview_url}></audio >
      )}
      <h3>{song.artists[0].name}</h3>
    </div>
  );
}

export default Card;