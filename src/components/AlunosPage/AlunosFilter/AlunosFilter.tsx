import {
  Box,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core"
import React, { useState } from "react"
import { Aluno, useGetAlunosLazyQuery } from "../../../generated/graphql"

const FilterAlunosForm = (props: Props) => {
  const [filterBy, setFilterBy] = useState("nome")
  const [text, setText] = useState("")

  const [getAlunos] = useGetAlunosLazyQuery({
    onCompleted: (data) => {
      console.log(data)
      props.onReturnAlunos(data.getAlunos)
    },
  })

  const handleSelectChange = (value: string) => {
    setFilterBy(value)
    fetchNewData(value, text)
  }

  const handleTextChange = (value: string) => {
    setText(value)
    fetchNewData(filterBy, value)
  }

  // delay de 0.25s para fazer o request
  const [throttle, setThrottle] = useState<NodeJS.Timeout>()

  // utilizei esse fetchNewData só para usar as queries do graphql, senão, eu usaria um alunos.filter(...) com os dados q já tenho, para não realizar requests desnecessárias
  const fetchNewData = (filterBy: string, text: string) => {
    if (throttle) clearTimeout(throttle)

    setThrottle(
      setTimeout(() => {
        switch (filterBy) {
          case "nome":
            getAlunos({ variables: { nome: text } })
            break
          case "cpf":
            getAlunos({ variables: { cpf: text } })
            break
          case "email":
            getAlunos({ variables: { email: text } })
            break
        }
      }, 250)
    )
  }

  return (
    <Box display="flex" alignItems="center">
      <FormControl variant="outlined" size="small">
        <Select
          id="select-filter"
          value={filterBy}
          onChange={(e) => handleSelectChange(e.target.value as string)}
        >
          <MenuItem value="nome">Nome</MenuItem>
          <MenuItem value="cpf">CPF</MenuItem>
          <MenuItem value="email">Email</MenuItem>
        </Select>
      </FormControl>

      <Box ml={2} />
      <TextField
        id="text-filter"
        placeholder="Filtrar"
        size="small"
        value={text}
        onChange={(e) => handleTextChange(e.target.value)}
        variant="outlined"
      />
    </Box>
  )
}

interface Props {
  onReturnAlunos: (alunos: Aluno[]) => void
}

export default FilterAlunosForm
