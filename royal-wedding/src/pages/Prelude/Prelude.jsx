
import { useNavigate } from "react-router-dom";
import "./Prelude.css";

function Prelude() {
  const navigate = useNavigate();

  return (
    <main className="prelude-page">
      <div className="prelude-shade" />

      <div className="prelude-particles" aria-hidden="true">
        {Array.from({ length: 24 }, (_, index) => (
          <span
            key={index}
            className="prelude-particle"
            style={{
              "--x": `${(index * 41 + 7) % 100}%`,
              "--delay": `${(index % 8) * -1.2}s`,
              "--duration": `${7 + (index % 5)}s`,
            }}
          />
        ))}
      </div>

      <section className="prelude-content">
        <div className="prelude-emblem">
          <span>J</span>
          <i>&amp;</i>
          <span>G</span>
          <div className="prelude-emblem-ornament">❦</div>
        </div>

        <p className="prelude-kicker">
          A NEW CHAPTER BEGINS
        </p>

        <h1 className="prelude-title">
          Two hearts.
          <span>One forever.</span>
        </h1>

        <div className="prelude-divider">
          <span />
          ❀
          <span />
        </div>

        <p className="prelude-description">
          With love, blessings and the coming together
          of two families, our story unfolds.
        </p>

        <p className="prelude-names">
          Jasleen <span>&amp;</span> Gurjeet
        </p>

        <p className="prelude-date">JANUARY 2027</p>

        
        <button
         className="prelude-button"
         onClick={() => navigate("/welcome")}
        >
        BEGIN THE CELEBRATION
        <span aria-hidden="true">→</span>
        </button>


        <p className="prelude-footer">
          MADE WITH LOVE · SHARED WITH FAMILY
        </p>
      </section>
    </main>
  );
}

export default Prelude;
