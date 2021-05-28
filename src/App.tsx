import { ApolloProvider } from "@apollo/client"
import { CssBaseline } from "@material-ui/core"
import React from "react"
import AlunosPage from "./components/AlunosPage/AlunosPage"
import { client } from "./graphql/client"

function App() {
  return (
    <ApolloProvider client={client}>
      <CssBaseline />

      <AlunosPage />
    </ApolloProvider>
  )
}

export default App
