import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import React from "react"
import { Aluno } from "../../../generated/graphql"

const AlunosTable = (props: { alunos: Aluno[] }) => {
  return (
    <TableContainer style={{ width: 800, maxHeight: 500 }}>
      <Table size="small" style={{ width: 780 }} stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>CPF</TableCell>
            <TableCell>E-Mail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.alunos.map((aluno, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{aluno.nome}</TableCell>
              <TableCell>{aluno.cpf}</TableCell>
              <TableCell>{aluno.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AlunosTable
