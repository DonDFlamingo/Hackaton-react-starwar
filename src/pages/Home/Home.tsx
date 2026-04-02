import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

interface Character {
    affiliations: string[];
}

function Home() {
    const [side, setSide] = useState<Character[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://miadil.github.io/starwars-api/api/all.json")
            .then((res) => res.json())
            .then((data) => setSide(data));
    }, []);

    const handleSelectAffiliation = (affiliationName: string) => {
        const results = side.filter((character) =>
            character.affiliations?.includes(affiliationName)
        );

        navigate("/bounty", { state: results });
    };

    return (
        <>
            <main className="contenent-home-card">
                <h1>CHOOSE YOUR DESTINY</h1>

                <div className="card-light-side">
                    <button onClick={() => handleSelectAffiliation("Jedi Order")}>
                        LIGHT SIDE
                    </button>
                </div>

                <div className="crad-dark-side">
                    <button onClick={() => handleSelectAffiliation("Sith")}>
                        DARK SIDE
                    </button>
                </div>
            </main>
        </>
    );
}

export default Home;