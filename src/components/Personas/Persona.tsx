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
    className?: string;
}

const PersonaCard = ({persona, className}: PersonaCardProps) => {
    const {firstName, lastName, email} = persona
    
    return (
        <div className={className}>
            <span>{firstName} {lastName}</span>
            <p>{email}</p>
        </div>
    )
}

export default PersonaCard