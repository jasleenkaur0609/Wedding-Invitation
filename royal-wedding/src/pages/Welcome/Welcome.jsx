
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const [phase, setPhase] = useState("arriving");
  const navigate = useNavigate();

  useEffect(() => {
    // Let the envelope settle into view before opening.
    const openTimer = window.setTimeout(() => {
      setPhase("opening");
    }, 1200);

    // Move to the next screen after the envelope opens.
    const navigationTimer = window.setTimeout(() => {
      navigate("/invitation", { replace: true });
    }, 4300);

    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(navigationTimer);
    };
  }, [navigate]);

  return (
    <main className={`welcome-page envelope-${phase}`}>
      <div className="welcome-frame">
        <div className="welcome-inner-frame" />

        <section className="welcome-content">
          <p className="welcome-eyebrow">
            WITH THE BLESSINGS OF OUR FAMILIES
          </p>

          <h1 className="welcome-names">
            Jasleen <span>&amp;</span> Gurjeet
          </h1>

          <div className="welcome-divider">
            ✦ ─── ❀ ─── ✦
          </div>

          <p className="welcome-description">
            A celebration of love, family &amp; forever
          </p>

          <p className="welcome-date">JANUARY 2027</p>

          <div className="envelope-stage">
            <div className="invitation-envelope">
              <div className="envelope-letter">
                <span className="letter-monogram">J &amp; G</span>
                <span className="letter-message">
                  Together, forever
                </span>
                <span className="letter-ornament">❦</span>
              </div>

              <div className="envelope-back" />

              <div className="envelope-front">
                <div className="envelope-flap" />
              </div>

              <div className="envelope-seal">
                <span>J&amp;G</span>
                <small>❦</small>
              </div>
            </div>
          </div>

          <p className="welcome-instruction">
            {phase === "opening"
              ? "With love, we open our invitation..."
              : "A little invitation to our forever"}
          </p>

          <div className="welcome-bottom-ornament">
            ✦ ───── ❦ ───── ✦
          </div>
        </section>
      </div>
    </main>
  );
}

export default Welcome;
