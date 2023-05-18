import './App.css';
import { TwitterCard } from './TwitterCard';

export const App = () => {

  return (
    <section className="App">
      <TwitterCard username="dejeloper" name="Jhonatan Guerrero" initialIsFollowing={true} />
      <TwitterCard username="lee_ji_eun" name="Lee Ji-Eun" />
      <TwitterCard username="LiSA_OLiVE" name="LiSA" />
    </section>
  )
}