
import { Link } from "react-router-dom";
import "./Invitation.css";

function Invitation() {
  return (
    <main className="invitation-page">
      <section className="invitation-page-card">
        <p className="invitation-page-eyebrow">
          A NEW CHAPTER BEGINS
        </p>

        <h1>
          The Wedding of
          <span>Jasleen &amp; Gurjeet</span>
        </h1>

        <div className="invitation-page-divider">❦</div>

        <p>
          Two families, two hearts, one beautiful beginning.
        </p>

        <p className="invitation-page-date">JANUARY 2027</p>

        <Link className="invitation-back-link" to="/">
          Return to the opening
        </Link>
      </section>
    </main>
  );
}

export default Invitation;
