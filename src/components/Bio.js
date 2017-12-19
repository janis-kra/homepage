import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Janis Krasemann`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          I am Janis Krasemann from 🇩🇪 and this is kind of my personal homepage.
          I build stuff using JavaScript 💻 and study computer science at the university of Paderborn 🤓{' '}
          <a href="https://twitter.com/JanisKra">
            Visit me on Twitter!
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
