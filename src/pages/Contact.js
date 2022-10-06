import React from 'react'
import {BiMap, BiPhoneCall, BiEnvelope} from 'react-icons/bi'
export default function Contact() {
    return (
        <div className="container contact-container">
            <h1>Entre em contato</h1>
            <div className="inside-wrapper-contact">
                <div className="contact-top-wrapper">
                    <div className="contact-block-icon">
                        <span className="contact-icon-btn"><BiPhoneCall /></span>
                        <span><a href="tel:800 123 4567">1-800 123 4567</a></span>
                        <span><a href="tel:800 123 4568">1-800 123 4568</a></span>
                    </div>
                    <div className="contact-block-icon">
                        <span className="contact-icon-btn"><BiEnvelope /></span>
                        <span><a href="mailto:info@example.com">info@example.com</a></span>
                        <span><a href="mailto:support@example.com">support@example.com</a></span>
                    </div>
                    <div className="contact-block-icon">
                        <span className="contact-icon-btn"><BiMap /></span>
                        <span>Paulista</span>
                        <span>São Paulo</span>
                    </div>
                </div>
                <div className="contact-bottom-wrapper">
                    <form>
                        <h1>Mantenha em contato!</h1>
                        <div className="input-group">
                            <label htmlFor="name">Seu nome</label>
                            <input name="name" id="name" type="text" className="input-name"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Seu Email</label>
                            <input name="email" id="email" type="email" className="input-email"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="message">Sua mensagem</label>
                            <textarea name="message" id="message" type="message" className="input-message" rows="8"/>
                        </div>
                        <button className="send-btn-promocode contact-send-btn">Enviar</button>
                    </form>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.4926969932762!2d-123.07601248442731!3d49.323890179335805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867038fe3e5665%3A0xa0a7c2e19b225c4a!2s133%2017th%20St%20W%2C%20North%20Vancouver%2C%20BC%20V7M%201V5!5e0!3m2!1sen!2sca!4v1613690229296!5m2!1sen!2sca" 
                    width="400" height="600" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" title="map"></iframe>                
                    </div>
            </div>
        </div>
    )
}
