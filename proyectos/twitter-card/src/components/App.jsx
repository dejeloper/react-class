import './App.css';
import { TwitterCard } from './TwitterCard';

export const App = () => {

  return (
    <section className="App">
      <TwitterCard username="dejeloper" name="Jhonatan Guerrero" isFollowing={false} />
      <TwitterCard username="lee_ji_eun" name="Lee Ji-Eun" isFollowing={false} />
      <TwitterCard username="kurosakimaon" name="Maon Kurosaki" isFollowing={false} />
      <TwitterCard username="IUmushimushi" name="IU mushi mushi" isFollowing={false} />
      <TwitterCard username="LiSA_OLiVE" name="LiSA" isFollowing={false} />
    </section>
  )
}