import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Mobile from './Mobile';
import Pc from './Pc';

export default function Portfolio() {

  const { pagename } = useParams()
  const history = useHistory();
  console.log(pagename);

  return (
    <section className='portfolio'>
      <header>
        <div className="container">
          <h2>Portfolio</h2>
        </div>
      </header>
      <div className="container">
        { pagename ? null : <Mobile /> }
        { pagename === 'mobile' && <Mobile /> }
        { pagename === 'pc' && <Pc /> }
      </div>
    </section>
  )
}
