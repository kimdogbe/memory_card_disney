import disneyLogo from '../assets/disney-logo.png'

export default function Nav({ currentScore = 0, highScore = 0}) {
  return <>
    <nav>
      <a href="https://www.disney.co.uk/" target="_blank">
        <img src={disneyLogo} className="logo" alt="Disney logo" />
      </a>
      <div className='scores'>
        <p>Current Score: {currentScore}</p>
        <p>High Score: {highScore}</p>
      </div>
    </nav>
  </>
}