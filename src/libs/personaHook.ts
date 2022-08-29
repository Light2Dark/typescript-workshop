import { useEffect, useState } from "react";
import { PersonaProps } from "../components/Personas/Persona";

// export const usePersonas = (count?: number) => {

//   const [personas, setPersonas] = useState<PersonaProps[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string>("");

//   if(!count) count = 5;

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true)
//       setPersonas([])
//       await fetch(`https://fakerapi.it/api/v1/persons?_quantity=${count}`)
//         .then(res => res.json())
//         .then(jsonData => {
//           if(jsonData.code === 200) {
//             return jsonData.data
//           }else{
//             throw new Error(jsonData.code + ": " + jsonData.status)
//           }
//         })
//         .then(persona => {
//           setPersonas(persona.map((persona : any) : PersonaProps => {
//             return {
//               id: persona.id,
//               firstName: persona.firstName,
//               lastnName: persona.lastName,
//               email: persona.email,
//               gender: persona.gender,
//               country: persona?.address?.country
//             }
//           }))
//           setLoading(false)
//         })
//         .catch(err => setError(err.toString()));
//     };

//     fetchData();

//   }, [count]);

//   return {
//     personas,
//     loading,
//     error
//   };
// }

const usePersonas = (numPersonasToFetch?: number) => {
    const [personas, setPersonas] = useState<PersonaProps[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
  
    if(!numPersonasToFetch) numPersonasToFetch = 5;

    useEffect(() => {
        let isFetching = true
        setLoading(true)

        const fetchPersona = async () => (
            await fetch(`https://fakerapi.it/api/v1/persons?_quantity=${numPersonasToFetch}`)
            .then(res => res.json())
            .then(jsonData => {
            if(jsonData.code === 200) {
                return jsonData.data
            }else{
                throw new Error(jsonData.code + ": " + jsonData.status)
            }
            })
            .then(persona => {
                if (isFetching) {
                    setPersonas(persona.map((persona : any) : PersonaProps => {
                        return {
                        id: persona.id,
                        firstName: persona.firstName,
                        lastName: persona.lastName,
                        email: persona.email,
                        gender: persona.gender,
                        country: persona?.address?.country
                        }
                    }))
                }
                setLoading(false)
            })
            .catch(err => setError(err.toString())))

        fetchPersona()

        // cleanup function
        return () => {
            isFetching = false
        } 

    }, [numPersonasToFetch])

    return {
        personas, 
        loading,
        error
    }
}

export default usePersonas