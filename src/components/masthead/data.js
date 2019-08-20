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
      }
    ],
    right: [
      {
        title: 'About',
        slug: '/about'
      },
      {
        title: 'Manifesto',
        slug: '/articles/f-the-lines-manifesto'
      },
      {
        title: 'Contact'
      }
    ]
  }
}

data.menuItems.all = data.menuItems.left.concat(data.menuItems.right)

export default data