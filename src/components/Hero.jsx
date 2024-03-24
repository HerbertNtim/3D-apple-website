import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { heroVideo, smallHeroVideo } from '../utils'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760){
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  // Resizing the image based on windows size
  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet)

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])
  

  useGSAP(() => {
    gsap.to('#hero', {opacity: 1, delay: 2})
    gsap.to('#cta', {opacity: 1, delay: 2, y:
    -50})
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <h2 id="hero" className="hero-title">iPhone 15 Pro</h2>

        <div className='md:w-10/12 w-9/12'>
          <video className='pointer-events-none' playsInline={true} autoPlay muted key={videoSrc}>
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>

      <div id='cta' className='flex flex-col items-center translate-y-20 opacity-0'> 
        <a href="#highlights" className='btn mt-2'>Buy Me</a>
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero