const color = {
  brightness: 'light',
  red: {
    lightest: '#FAF5F5',
    lighter: '#F5F0F0',
    light: '#F5E6E6',
    lighten: '#E37D71',
    medium: '#E35040',
    darken: '#665251',
    darker: '#3F1512',
    darkest: '#33110F'
  },
  grey: {
    lighten: '#CCC8C8'
  },
  blue: {
    lightest: '#F5F7FA',
    lighter: '#EBEFF5'
  },
  green: {
    medium: '#46BFA7',
  }
}

color.primary = color.red
color.default = color.primary

export default color