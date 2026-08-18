import '../App.css'
import { useNavigate } from 'react-router-dom'

function Premio() {
      const navigate = useNavigate()
  
    return (
    <main className="bloomy-page">
        <div className="prize-flower prize-flower-1">🌸</div>
      <div className="prize-flower prize-flower-2">🌼</div>
      <div className="prize-flower prize-flower-3">🌷</div>
      <div className="prize-flower prize-flower-4">🌸</div>

      <div className="prize-petal prize-petal-1">🌸</div>
      <div className="prize-petal prize-petal-2">🌸</div>
      <div className="prize-petal prize-petal-3">🌸</div>

      <div className="prize-bottom-wave" />
     <section className="prize-page">

  <h1 className="prize-heading">
    ¡GANASTE!
  </h1>

  <p className="prize-subtitle">
    Tu premio es:
  </p>

  <div className="prize-card">
    <span className="sparkle sparkle-left">✦</span>
    <span className="sparkle sparkle-right">✦</span>

    <h2>15% OFF</h2>

    <p>
      en tu próxima compra
      <br />
      en Bloomy Pipa 🌷
    </p>
  </div>

  <p className="prize-info">
    Este premio todavía está disponible.
    <br />
    Reclamalo para que sea tuyo. 💗
  </p>

  <button
    className="discover-button prize-button"
    onClick={() => navigate('/reclamar')}
  >
    RECLAMAR MI PREMIO 🌸
  </button>

</section> 
    </main>
  )
}

export default Premio