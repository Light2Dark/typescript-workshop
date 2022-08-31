import "./styles.css"

export interface PersonaProps {
    id: number
    firstName: string
    lastName: string
    email: string
    gender: Genders | "others"
    country: string
  }
  
type Genders = "male" | "female"

type PersonaCardProps = {
    persona: PersonaProps
}

const PersonaCard = ({persona}: PersonaCardProps) => {
    const {firstName, lastName, email} = persona
    
    return (
        <div className="persona">
            <span>{firstName} {lastName}</span>
            <p>{email}</p>
        </div>
    )
}

export default PersonaCard