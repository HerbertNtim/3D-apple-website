import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', {opacity: 1, y: 0})
    gsap.to('.link', {opacity: 1, y: 0, duration: 1, stagger: 0.5})
  }, [])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="flex w-full items-end justify-between mb-12">
          <h1 id="title" className="section-heading">Get the highlights.</h1>

          <div className="md:flex items-end flex-wrap gap-5 mr-[100px]">
            <p className="link">
              Watch the film.
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event.
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights