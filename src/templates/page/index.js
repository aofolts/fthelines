export const query = graphql`
  query pageBySlug($slug: String!) {
    page: contentfulPage(slug: {eq: $slug}) {
      ...pageFields
    }
  }
`

export const pageFieldsFragment = graphql`
  fragment pageFields on ContentfulPage {
    id
    title
    slug
  }
`
