import usePersonas from "./libs/personaHook"
import PersonaList from "./components/Personas/PersonaList"

function App() {
  const {personas, loading, error} = usePersonas(5)

  return (
    <div className="App">
      {
        error ? 
          (<p>Error: {error} </p>) :
        loading ? 
          (<p>Loading data :D</p>) :
        personas.length > 0 ?
          (<PersonaList personas={personas} />) :
          (<p>No personas found, sry</p>)
      }
      
    </div>
  );
}

export default App;
