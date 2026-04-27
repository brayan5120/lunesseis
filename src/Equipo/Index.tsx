import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Equipo() {
  const { equipo } = useParams();
  const [data, setData] = useState<any>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!equipo) return;

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (favorites.includes(equipo)) {
      setIsFavorite(true);
    }

    const fetchData = async () => {
      const res = await fetch(
        `https://raw.githubusercontent.com/sdtibata/dataliga/main/${equipo}.json`
      );

      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, [equipo]);

  const toggleFavorite = () => {
    if (!equipo) return;

    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (favorites.includes(equipo)) {
      favorites = favorites.filter((fav: string) => fav !== equipo);
      setIsFavorite(false);
    } else {
      favorites.push(equipo);
      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  if (!data) return <p>Cargando...</p>;

  return (
    <div>
      <h1>
        {data.team.name}

        <button onClick={toggleFavorite}>
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </h1>

      <p>Ciudad: {data.team.info.city}</p>
      <p>Estadio: {data.team.info.stadium}</p>
      <p>Fundado: {data.team.info.founded}</p>
    </div>
  );
}

export default Equipo;