import '../styles/Links.css'
import githubLogoDark from '../assets/github-icons/github-mark-white.svg'
import githubLogo from '../assets/github-icons/github-mark.svg'
import linkedinLogo from '../assets/linkedin-icons/LI-In-Bug.svg'
import { useState } from 'react'
import { useEffect } from 'react'

function Links() {
  const [gitLogo, setGitLogo] = useState(githubLogo)

  const isDarkMode = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')) {
      setGitLogo(githubLogoDark);
    } else {
      setGitLogo(githubLogo);
    }
  }

  useEffect(() => {
    isDarkMode();
  }, [gitLogo]);

  return (
    <div className='social-logos'>
      <a href='https://www.github.com/burakay' target='_blank' rel="noreferrer"><img id="github-logo" src={gitLogo} alt='GitHub Logo' /></a>
      <a href='https://www.linkedin.com/in/aydemirburak' target='_blank' rel="noreferrer"><img id='linkedin-logo' src={linkedinLogo} alt='LinkedIn Logo' /></a>
    </div>
  );
}

export default Links;