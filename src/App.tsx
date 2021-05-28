import { ApolloProvider } from "@apollo/client"
import { CssBaseline } from "@material-ui/core"
import React from "react"
import "./App.css"
import Home from "./components/Home/Home"
import { client } from "./graphql/client"

function App() {
  return (
    <ApolloProvider client={client}>
      <CssBaseline />

      <Home />
    </ApolloProvider>
  )
}

export default App
