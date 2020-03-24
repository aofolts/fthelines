var axios = require('axios')
const api_key = process.env.CONVERTKIT_API_KEY

export function handler(event, context, callback) {
  
  const { 
    first_name,
    email
  } = JSON.parse(event.body)

  axios.post(`https://api.convertkit.com/v3/forms/1274285/subscribe`, {
    api_key,
    email,
    first_name,
    tags: ["1366830"]
  }).then(r => {
    callback(null, {
      statusCode: 200, // http status code
      body: JSON.stringify({
        response: r  
      }),
    })
  })
}