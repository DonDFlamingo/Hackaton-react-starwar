import "./Card.css";

interface Character {
  name: string;
  affiliations: string[];
  image?: string;
  description?: string;
  height: number;
  mass: number;
}

interface CardProps {
  character: Character;
}

function Card({ character }: CardProps) {
  // supprimer useLocation et useState
  const affiliationClass = character.affiliations.includes("Sith")
    ? "sith"
    : character.affiliations.includes("Jedi Order")
      ? "jedi"
      : "neutral";

  return (
    <section className="card-section">
      <div className={`card-container ${affiliationClass}`}>
        <div className="container-img-info">
          <div className="card-div-img">
            <img src={character.image} alt={character.name} />
          </div>
          <div className="card-div-info">
            <h2>{character.name}</h2>
            <p>Clan : {affiliationClass}</p>
            <p>Height : {character.height}</p>
            <p>Mass : {character.mass}</p>
          </div>
        </div>
        <div className="card-div-description"></div>
      </div>
    </section>
  );
}

export default Card;
