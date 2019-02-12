import React from 'react'
import styled,{ThemeProvider} from 'styled-components'
import Testimonial from './card-review'

const testimonialTemplate = {
  headline: `Such knowledgeable staff!`,
  quote: `My wife has been preaching the benefits of a properly fitted shoe for years and I’d roll my eyes and just order the deal of the week from Amazon. For my birthday this year she took me in and (I’ll even show her I said this) … I was wrong.`,
  author: `John Smith`,
  source: `Facebook Review`
}

const data = {
  testimonials: [
    testimonialTemplate
  ],
  secondaryTestimonials: [
    testimonialTemplate,
    testimonialTemplate,
    testimonialTemplate,
    testimonialTemplate,
    testimonialTemplate,
    testimonialTemplate,
    testimonialTemplate,
    testimonialTemplate
  ]
}

const TestimonialsContainer = styled.div`
  display: block;
  margin: 0 auto;
  width: ${props => props.theme.columns(12)};
  padding: ${props => props.theme.padding.default};
`

const TestimonialsList = styled.ul`
  display: block;
  width: 100%;
`

const TestimonialItem = styled.li`
  display: inline-block;
  width: ${props => props.theme.columns(6)};
`

const testimonialsItems = data.testimonials.map(entry => (
  <TestimonialItem key={entry.author}>
    <Testimonial entry={entry}/>
  </TestimonialItem>
))

const UnstyledTestimonialsSection = ({
  className
}) => {
  return (
    <ThemeProvider theme={{palette: 'primary',reverse: true}}>
      <section id='testimonials' className={className}>
        <TestimonialsContainer>
          <TestimonialsList>
            {testimonialsItems}
          </TestimonialsList>
        </TestimonialsContainer>
      </section>
    </ThemeProvider>
  )
}

const TestimonialsSection = styled(UnstyledTestimonialsSection)`
  background: linear-gradient(45deg,${props => props.theme.color.green.medium},${props => props.theme.color.green.darken});
`

export default TestimonialsSection