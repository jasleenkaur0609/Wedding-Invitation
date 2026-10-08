import monogram from "../../assets/images/monogram.png";

export default function WeddingMonogram() {
  return (
    <div className="wedding-monogram">
      <img
        src={monogram}
        alt="Jasleen and Gurjeet wedding monogram"
        className="wedding-monogram__image"
      />
    </div>
  );
}