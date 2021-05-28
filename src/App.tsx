import { ApolloProvider } from "@apollo/client"
import { CssBaseline } from "@material-ui/core"
import React from "react"
import AlunosPage from "./components/AlunosPage/AlunosPage"
import { apolloClient } from "./graphql/apolloClient"

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <CssBaseline />

      <AlunosPage />
    </ApolloProvider>
  )
}

export default App
