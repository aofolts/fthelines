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
        title: 'Contact',
        url: 'mailto:andrew<at>fthelines.com'
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