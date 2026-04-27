import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [ranking, setRanking] = useState<any[]>([]);

  const equiposMap: Record<string, string> = {
    "Millonarios FC": "millonarios",
    "Club Independiente Santa Fe": "independiente-santa-fe",
    "América de Cali SA": "america-de-cali",
    "CD Popular Junior FC SA": "junior"
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://raw.githubusercontent.com/sdtibata/dataliga/main/posiciones.json`
      );

      const data = await res.json();
      setRanking(data.standings[0].ranking);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Tabla de Posiciones</h1>

      {ranking.map((equipo) => (
        <p key={equipo.rank}>
          {equipo.rank}.{" "}
          <Link
            to={`/equipo/${equiposMap[equipo.contestantName] || "millonarios"}`}
          >
            {equipo.contestantName}
          </Link>
        </p>
      ))}
    </div>
  );
}

export default Home;