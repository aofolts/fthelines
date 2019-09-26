export const normalizeEntry = entry => {
  if (entry.fields) {
    Object.assign(entry,entry.fields)
    delete entry.fields
  }

  entry.type = getEntryType(entry)
  entry.isPublished = entryIsPublished(entry)
  entry.type = getEntryType(entry)

  const fieldKeys = Object.keys(entry)

  fieldKeys.forEach(key => {
    const field = entry[key] 

    if (['sys'].includes(key)) return null

    if (typeof(field) === 'object' && field['en-US']) {
      entry[key] = field['en-US']
    }
  })

  return entry
}

export const entryIsPublished = entry => {
  if (!entry.sys) return true

  return entry.sys.revision ? true : false
}

export const getEntryType = entry => {
  if (!entry) return false
  let type = ''

  if (!entry.sys) {
    let typeName = entry['__typename']

    type = typeName.replace('Contentful','')
    type = type.charAt(0).toLowerCase() + type.slice(1)

    return type
  }

  return entry.sys.contentType.sys.id
}