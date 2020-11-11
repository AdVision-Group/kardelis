import React, { createContext, useState } from 'react'

export const ContactContext = createContext({
    heading: '',
    name: '',
    email: '',
    message: ''
})

const ContactProvider = ({ children }) => {
    const heading = "Napíšte nám"

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <ContactContext.Provider value={{
            heading,
            name,
            setName,
            email,
            setEmail,
            message,
            setMessage
        }}>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactProvider