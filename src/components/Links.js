import '../styles/Links.css'
import githubLogo from '../assets/github/github-mark-white.svg'
import linkedinLogo from '../assets/linkedin/LI-In-Bug.svg'

function Links() {
  return (
    <div className='social-logos'>
      <a href='https://www.github.com/burakay' target='_blank'><img id="github-logo" src={githubLogo} alt='GitHub Logo' /></a>
      <a href='https://www.linkedin.com/in/aydemirburak' target='_blank'><img id='linkedin-logo' src={linkedinLogo} alt='LinkedIn Logo' /></a>
    </div>
  );
}

export default Links;