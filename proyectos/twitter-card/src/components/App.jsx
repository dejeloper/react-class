import './App.css';
import { TwitterCard } from './TwitterCard';

const users = [
  {
    username: "dejeloper",
    name: "Jhonatan Guerrero",
    initialIsFollowing: true
  },
  {
    username: "lee_ji_eun",
    name: "Lee Ji-Eun",
    initialIsFollowing: false
  },
  {
    username: "LiSA_OLiVE",
    name: "LiSA",
    initialIsFollowing: false
  },
]

export const App = () => {

  return (
    <section className="App">
      {
        users.map(({ username, name, initialIsFollowing }) => {
          <TwitterCard key={username}
            username={username}
            name={name}
            initialIsFollowing={initialIsFollowing}
          />
        })
      }
    </section>
  )
}