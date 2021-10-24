import React from 'react'
import PricingHero from './PricingHero'
import PricingCards from './PricingCards'
import Spend from './Spend'
import Trusted from '../Trusted'
const PricingPage = () => {
    return (
        <div>
            <PricingHero />
            <br />
            <PricingCards />
            <br />
            <Spend />
            <Trusted/>

        </div>
    )
}

export default PricingPage
