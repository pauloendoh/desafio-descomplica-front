import React from "react"
import { createClient, Provider } from "urql"
import "./App.css"
import Home from "./components/Home"

const client = createClient({ url: "http://localhost:8000/graphql" })

function App() {
  return (
    <Provider value={client}>
      <Home />
    </Provider>
  )
}

export default App
