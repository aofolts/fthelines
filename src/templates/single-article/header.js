import styled,{ThemeProvider} from 'styled-components'
import {BodyText} from 'components/text'
import React from 'react'
import BackgroundImage from 'components/image-background'
import media from 'components/theme/media'

const Content = styled.div`
  width: ${props => props.theme.columns(10)};
  max-width: 100%;
  margin: 0 auto;
  padding: ${props => props.theme.padding.default};
`

const Excerpt = styled(BodyText)`
  width: ${props => props.theme.columns(7)};
  max-width: 100%;
`

const Meta = styled.div`
  display: flex;
  align-items: center;
  width: ${props => props.theme.columns(7)};
  max-width: 100%;

  &:after {
    content: '';
    flex: 1;
    margin-left: ${props => props.theme.padding.medium};
    height: 2px;
    background: black;
    opacity: .1;
  }
`

const AuthorPhoto = styled.div`
  width: ${props => props.theme.padding.mediumSmall};
  max-width: 100%;
  height: ${props => props.theme.padding.mediumSmall};
  border-radius: 1000px;
  overflow: hidden;
  margin-right: ${props => props.theme.padding.extraSmall};
`

const MetaInfo = styled.div`
  
`

const AuthorName = styled(BodyText)`
  margin-bottom: 0;
  font-weight: 600;
`

const PublishDate = styled(BodyText)`
  margin-bottom: 0;
`

export const ArticleTitle = styled.h1`
  font-size: 6rem;
  font-family: highlighted,monospace;
  margin-bottom: .5em;
  line-height: 1.3em;
  color: ${props => props.theme.color.grey.darkest};

  ${media.phone`
    font-size: 4rem;
  `}
`

const UnstyledHeader = ({
  className,
  entry
}) => {
  return (
    <ThemeProvider theme={{colorMode: 'light'}}>
      <section id='article-header' className={className}>
        <Content>
          <ArticleTitle kind='title'>{entry.title}</ArticleTitle>
          <Excerpt level='1'><b>Quick Rundown:</b> {entry.summary.text}</Excerpt>
          <Meta>
            <AuthorPhoto>
              <BackgroundImage data={entry.author.avatar}/>
            </AuthorPhoto>
            <MetaInfo>
              <AuthorName level='3'>{entry.author.name}</AuthorName>
              <PublishDate level='3'>{entry.updatedAtString}</PublishDate>
            </MetaInfo>
          </Meta>
        </Content>
      </section>
    </ThemeProvider>
  )
}

const Header = styled(UnstyledHeader)`
  background: ${props => props.theme.color.grey.lightest};
`

export default Header