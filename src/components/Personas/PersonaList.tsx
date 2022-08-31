import PersonaCard, { PersonaProps } from "./Persona"

type PersonaListProps = {

    personas: PersonaProps[]
}

const PersonaList = ({personas}: PersonaListProps) => {
    return (
        <section className="container">
            {personas.map(persona => (
                <PersonaCard key={persona.id} persona={persona}  />
            ))}
        </section>
    )
}

export default PersonaList