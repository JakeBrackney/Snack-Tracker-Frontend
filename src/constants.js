let environment = "production"

if(window.location.hostname === "localhost") {
  environment = "localhost"
}

let CLIENT_URL = ""

if(environment === "localhost") {
  CLIENT_URL = "http://localhost:3001/api/restaurants/"
} else {
  CLIENT_URL = "https://snack-track-api.herokuapp.com/api/restaurants/"
}

export { CLIENT_URL }