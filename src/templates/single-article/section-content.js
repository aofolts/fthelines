import styled, {createGlobalStyle} from 'styled-components'
import React from 'react'
import theme from 'components/theme'
import RichText from 'components/rich-text'
import AudioPlayer from './audio-player'

const Content = styled.div`
  width: ${props => props.theme.columns(9)};
  max-width: 100%;
  margin: 0 auto;
`

const ContentStyle = createGlobalStyle`
  #article-content > :first-child {
    margin-top: 0;
  }

  #article-content p,
  #article-content h2,
  #article-content h3,
  {
    word-spacing: ${theme.wordSpacing.small};
    letter-spacing: ${theme.letterSpacing.small};
  }

  #article-content p b { 
   font-family: Nitti,monospace;
  }

  #article-content p a {
    font-family: underlined;
  }

  #article-content p u {
    font-family: corrected;
    user-select: none;
    text-decoration: none;
  }

  #article-content blockquote {
    font-size: 2.8rem;
    font-style: italic;
    padding-left: ${props => props.theme.padding.small};
    margin-bottom: 1em;
  }

  #article-content blockquote p {
    font-size: inherit;
    margin-bottom: 0;
  }

  #article-content > h2,
  #article-content > h3 {
    color: ${props => props.theme.color.grey.darkest};
    font-family: nitti,monospace;
    margin-bottom: .5em;
    margin-top: 2em;
    width: ${props => props.theme.columns(6)};
    max-width: 100%;
    word-spacing: ${theme.wordSpacing.small};
    letter-spacing: ${theme.letterSpacing.small};
  }

  #article-content h2 {
    font-size: 3.8rem;
    font-weight: 500;
  }

  #article-content h3 {
    font-size: 2.8rem;
    font-weight: 500;
    font-family: nitti, monospace;
  }

  img {
    width: ${props => props.theme.columns(6)};
    max-width: 100%;
  }
`

const ContentBody = styled.div`
  width: ${props => props.theme.columns(6)};
  max-width: 100%;
  margin-right: auto;
`

const UnstyledContentSection = ({
  className,
  data
}) => {
  const richText = data.entry.content.json
  const entry = data.entry
  const podcastEpisode = entry.podcastEpisode

  return (
    <section id='article-body' className={className}>
      <Content id='article-content'>
        <ContentBody>
          {podcastEpisode ? <AudioPlayer episode={data.entry.podcastEpisode}/> : null}
          <ContentStyle/>
          <RichText json={richText}/>
        </ContentBody>
      </Content>
    </section>
  )
}

const ContentSection = styled(UnstyledContentSection)`
  background: ${props => props.theme.color.grey.lightest};
  padding: ${props => props.theme.padding.default};
`

export default ContentSection