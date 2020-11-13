import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare, faLaptop, faLaptopCode, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const website = <FontAwesomeIcon icon={faLaptopCode} />
const email = <FontAwesomeIcon icon={faEnvelopeSquare} />
const linkedIn = <FontAwesomeIcon icon={faLinkedin} />
const github =<FontAwesomeIcon icon={faGithub}/>
const twitter = <FontAwesomeIcon icon={faTwitter} />
const phone = <FontAwesomeIcon icon={faPhone} />



// ReactDOM.render(element, document.body)

class Header extends Component {
    render(){
        return (
            <header>
                <section>
                    <h1>Cici (CC) Zhang</h1>
                    <h3>Frontend Developer</h3>
                    <h4>University of Waterloo</h4>
                    <h4>Juno Web Development Bootcamp</h4>
                </section>
                <nav>
                    <ul>
                        <li><a href="https://helloim.cc" >{website} helloim.cc</a></li>
                        <li><a href="mailto:cici.j.zhang@gmail.com">{email} cici.j.zhang@gmail.com</a></li>
                        <li><a href="tel:6479913228">{phone} 647-991-3228</a></li>
                        <li><a href="https://twitter.com/smol_data">{twitter} twitter.com/smol_data</a></li>
                        <li><a href="https://linkedin.com/in/smoldata">{linkedIn} linkedin.com/in/smoldata/</a></li>
                        <li><a href="https://github.com/CiciZhang">{github} github.com/CiciZhang</a></li>
                        
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header

