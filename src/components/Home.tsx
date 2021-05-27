import { Box } from "@material-ui/core"
import React from "react"
import { useQuery } from "urql"

const Home = () => {
  const [result] = useQuery({
    query: `{
  aluno {
    nome
    cpf
    email
  }
}`,
  })

  return (
    <Box>
      {result?.data?.aluno?.map((aluno, index) => (
        <Box key={index}>{aluno.nome}</Box>
      ))}
    </Box>
  )
}

export default Home
