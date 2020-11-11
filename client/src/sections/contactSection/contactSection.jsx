import React, { useContext } from 'react'
import { ContactContext } from '../../contexts/contact/contact.context'
import CustomInput from '../../components/input/input'
import CustomTextarea from '../../components/textarea/textarea'
import CustomButton from '../../components/button/button'
import SectionHeading from '../../components/section-heading/section-heading.component'
import { contactStyles, rowStyles, colStyles } from './contactSection.module.scss'

const ConstactSection = () => {
    const {
        heading,
        name,
        email,
        message,
        setName,
        setEmail,
        setMessage
    } = useContext(ContactContext)

    return (
        <section id='kontakt' className={contactStyles}>
            <div className='container'>
                <div className={rowStyles}>
                    <div className={colStyles}>
                        <SectionHeading title={heading} />
                    </div>
                    <div className={colStyles}>
                        <form
                            name="contact"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            data-sal="slide-up"
                            data-sal-duration="1800"
                        >
                            {/* You still need to add the hidden input with the form name to your JSX form */}
                            <input type="hidden" name="form-name" value="contact" />
                            <CustomInput
                                name='name'
                                type='text'
                                handleChange={e => setName(e.target.value)}
                                value={name}
                                label='Meno'
                                required
                            />
                            <CustomInput
                                name='email'
                                type='email'
                                handleChange={e => setEmail(e.target.value)}
                                value={email}
                                label='E-mail'
                                required
                            />
                            <CustomTextarea
                                name="message"
                                rows="5"
                                handleChange={e => setMessage(e.target.value)}
                                value={message}
                                label="Správa"
                                required
                            />
                            <CustomButton>Odoslať</CustomButton>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ConstactSection
