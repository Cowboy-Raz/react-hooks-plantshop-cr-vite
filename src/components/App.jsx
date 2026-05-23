import { useState, useEffect } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  function handleAddPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((savedPlant) => setPlants([...plants, savedPlant]));
  }

  function handleToggleSoldOut(id) {
    setPlants(
      plants.map((plant) =>
        plant.id === id
          ? { ...plant, inStock: !plant.inStock }
          : plant
      )
    );
  }

  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Search searchQuery={searchQuery} onSearch={setSearchQuery} />
      <NewPlantForm onAddPlant={handleAddPlant} />
      <PlantList plants={displayedPlants} onToggleSoldOut={handleToggleSoldOut} />
    </div>
  );
}

export default App;