import iconInstagram from "../assets/instagram.svg"
import iconGithub from "../assets/github.svg"
import iconTwitter from "../assets/twitter.svg"
import videoTutorial from "../assets/RainTech.mp4"

import { ManualContainer } from "../pages/Home.styles"
import  Header from "../pages/Header"

import React, { useRef } from "react"

export function Manual() {
  const videoRef = useRef();


  const handlePlay = () => {
    videoRef.current.play();
  };
    return (
    <ManualContainer>
      <main>
        <Header></Header>
        <section>
          <div>
            <h1>Como Funciona?</h1>
            <h2>Confira agora nosso vídeo explicando o <br /> funcionamento do produto e como <br /> utilizá-lo</h2>
          </div>


          <div class="videozinho">
          <video src={videoTutorial} type="video/mp4" controls height={200} width={300} max-width={500} ref={videoRef} poster="data:image/jpeg;base64,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"></video>
          <div class="grid-btn">
          <button class="play" onClick={handlePlay}>▶ Assista ao vídeo</button>
          </div>
          </div>

          

          <div className="container_redes">
            <div className="redes_img">
              <img src={iconInstagram} alt="ícone do Instagram" />
              <img src={iconGithub} alt="ícone do Github" />
              <img src={iconTwitter} alt="ícone do Twitter" />
            </div>
            <p> Nos acompanhe nas <br /> redes sociais!</p>
          </div>
        </section>
        
        
      </main>
    </ManualContainer>
   )
 }

 