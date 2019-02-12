import React from 'react'
import styled from 'styled-components'
import ServiceCard from './card-service'
import apartmentsSrc from './images/card-image-guy-woman-running-apartments.jpg'
import racingSrc from './images/card-image-men-racing-boat.jpg'
import fitSrc from './images/card-image-woman-tying-shoe.jpg'

const data = {
  services: [
    {
      title: 'Fit Process',
      cta: 'Get the right fit',
      details: "Tired of endless returns? We'll measure your feet, analyze your gate, and suggest some options tailored to your unique goals.",
      image: {
        src: fitSrc
      }
    },
    {
      title: 'Training Groups',
      cta: 'Train with us',
      details: `You don't have to be an Olympic sprinter to hang with us. We've got groups for every skill level, from "just for fun" to "need that PR."`,
      image: {
        src: apartmentsSrc
      }
    },
    {
      title: 'Races & Events',
      cta: 'Race with us',
      details: `We host and sponsors races all year long: on the trails, on the roads, and even through the snow. Let's get you laced up.`,
      image: {
        src: racingSrc
      }
    }
  ]
}

const services = data.services.map(entry => (
  <ServiceCard key={entry.title} entry={entry}/>
))

const ServicesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(35rem,1fr));
  grid-gap: ${props => props.theme.padding.medium};
  width: ${props => props.theme.columns(12)};
  max-width: 100%;
  margin: 0 auto;
`

const UnstyledServicesSection = ({
  className
}) => {
  return (
    <section id='services' className={className}>
      <ServicesList>
        {services}
      </ServicesList>
    </section>
  )
}

const SericesSection = styled(UnstyledServicesSection)`
  padding: ${props => props.theme.padding.default};
  margin-top: calc(${props => props.theme.padding.large} * -1);
`

export default SericesSection