import { useState } from "react";

export function TwitterCard({ username = 'unknown', name = 'unknown', initialIsFollowing = false }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const imgSrc = `https://unavatar.io/${username}`;
  const imgAlt = `Foto de Perfil de ${username}`;

  const textFollowing = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonFollowing = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={imgSrc} alt={imgAlt} />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{username}</span>
        </div>
      </header>
      <aside>
        <button className={buttonFollowing} onClick={handleClick}>
          <span className="tw-followCard-text">{textFollowing}</span>
          <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  )
}