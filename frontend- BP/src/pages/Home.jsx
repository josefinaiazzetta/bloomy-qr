import '../App.css'
import logoBloomy from '../assets/logo-bloomy.png'
import ramoBloomy from '../assets/ramo-bloomy.png'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <main className="bloomy-page">

      <div className="flower flower-1">🌸</div>
      <div className="flower flower-2">🌼</div>
      <div className="flower flower-3">🌷</div>
      <div className="flower flower-4">🌸</div>

      <div className="petal petal-1">🌸</div>
      <div className="petal petal-2">🌸</div>
      <div className="petal petal-3">🌸</div>

      <section className="hero">

        <div className="hero-text">

          <img
            src={logoBloomy}
            alt="Logo de Bloomy Pipa"
            className="bloomy-logo"
          />

          <p className="subtitle">
            FLORES Y RAMOS DE LIMPIAPIPAS
            <br />
            HECHOS A MANO
          </p>

          <div className="title-block">
            <span className="tulip">🌷</span>

            <h1>
              ¡ENCONTRASTE
              <br />
              UN BLOOMY!
            </h1>

            <p>
              Hay un premio escondido
              <br />
              detrás de este QR.
            </p>
          </div>

          <button
            className="discover-button"
            onClick={() => navigate('/premio')}
          >
            DESCUBRIR MI PREMIO ✨
          </button>

        </div>

        <div className="hero-image-wrapper">

          <img
            src={ramoBloomy}
            alt="Ramo de Bloomy Pipa"
            className="hero-image"
          />

        </div>

      </section>

      <div className="bottom-wave" />

    </main>
  )
}

export default Home