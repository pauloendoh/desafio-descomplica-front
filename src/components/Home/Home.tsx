import { Box } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { Aluno, useGetAlunosQuery } from "../../generated/graphql"
import AlunosTable from "./AlunosTable/AlunosTable"
import AlunosFilter from "./AlunosFilter/AlunosFilter"

const Home = () => {
  const [alunos, setAlunos] = useState<Aluno[]>([])
  const result = useGetAlunosQuery()

  useEffect(() => {
    if (result.data?.getAlunos) setAlunos(result.data.getAlunos)
  }, [result])

  return (
    <Box p={4}>
      <AlunosFilter onReturnAlunos={(alunos) => setAlunos(alunos)} />

      <Box mt={2} />
      <AlunosTable alunos={alunos} />
    </Box>
  )
}

export default Home
