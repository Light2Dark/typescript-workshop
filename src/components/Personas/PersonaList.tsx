import PersonaCard, { PersonaProps } from "./Persona"

type PersonaListProps = {
    className?: string
    personas: PersonaProps[]
}

const PersonaList = ({className, personas}: PersonaListProps) => {
    return (
        <section className={className}>
            {personas.map(persona => (
                <PersonaCard key={persona.id} persona={persona}  />
            ))}
        </section>
    )
}

export default PersonaList