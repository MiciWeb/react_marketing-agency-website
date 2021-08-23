import React from 'react'
import {FooterContainer,FooterSubscription,FooterSubHeading,FooterSubText} from "./Footer.elements.js"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer
