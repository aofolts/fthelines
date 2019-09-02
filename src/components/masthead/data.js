const data = {
  menuItems: {
    left: [
      {
        title: 'Coaching',
        slug: '/coaching'
      },
      {
        title: 'Articles',
        slug: '/articles'
      },
      {
        title: 'Podcast',
        slug: '/podcast'
      },
      {
        title: 'Meetup',
        url: 'https://www.meetup.com/roc-creatives-freelancers/'
      }
    ],
    right: [
      {
        title: 'Tools',
        slug: '/tools'
      },
      {
        title: 'About',
        slug: '/about'
      },
      {
        title: 'Manifesto',
        slug: '/articles/f-the-lines-manifesto'
      },
      {
        title: 'Subscribe',
        slug: '/articles/freedom-business-roadmap'
      }
    ]
  }
}

data.menuItems.all = data.menuItems.left.concat(data.menuItems.right)

export default data