/* eslint-disable react/prop-types */
export function TwitterCard({ username, name, isFollowing }) {
  const imgSrc = `https://unavatar.io/${username}`;
  const imgAlt = `Foto de Perfil de ${username}`;

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
        <button className="tw-followCard-button" disabled={isFollowing}>Seguir</button>
      </aside>
    </article>
  )
}