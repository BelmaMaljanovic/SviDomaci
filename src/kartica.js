
import "./App.css";

function Kartica(props) {
  const { slika, tekst } = props;
  return (
    <div className="Okvir">
      <img src={slika} />
      <div className="tekst">
        <h1> CATEGORY</h1>
        <h2> {tekst} </h2>
        <p>
          Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
          microdosing tousled waistcoat.Photo booth fam kinfolk cold-pressed
          sriracha leggings jianbing microdosing tousled waistcoat.
        </p>
      </div>
    </div>
  );
}
export default Kartica;
