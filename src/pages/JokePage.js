import { Header, Joke } from '../components';

export const JokePage = () => {
  return (
    <main>
        <Header heading="ChuckNorris Jokes" subHeading="Free JSON API for hand curated Chuck Norris facts."/>
        <Joke />
    </main>
    
  )
}
