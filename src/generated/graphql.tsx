import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Aluno = {
  __typename?: 'Aluno';
  nome: Scalars['String'];
  cpf: Scalars['String'];
  email: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllAlunos: Array<Aluno>;
  getAlunosByNome: Array<Aluno>;
  getAlunosByCpf: Array<Aluno>;
  getAlunosByEmail: Array<Aluno>;
  getAlunos: Array<Aluno>;
};


export type QueryGetAlunosByNomeArgs = {
  nome: Scalars['String'];
};


export type QueryGetAlunosByCpfArgs = {
  cpf: Scalars['String'];
};


export type QueryGetAlunosByEmailArgs = {
  email: Scalars['String'];
};


export type QueryGetAlunosArgs = {
  email?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['String']>;
};

export type AlunoFragmentFragment = (
  { __typename?: 'Aluno' }
  & Pick<Aluno, 'nome' | 'cpf' | 'email'>
);

export type GetAlunosQueryVariables = Exact<{
  nome?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
}>;


export type GetAlunosQuery = (
  { __typename?: 'Query' }
  & { getAlunos: Array<(
    { __typename?: 'Aluno' }
    & AlunoFragmentFragment
  )> }
);

export const AlunoFragmentFragmentDoc = gql`
    fragment AlunoFragment on Aluno {
  nome
  cpf
  email
}
    `;
export const GetAlunosDocument = gql`
    query getAlunos($nome: String, $cpf: String, $email: String) {
  getAlunos(nome: $nome, cpf: $cpf, email: $email) {
    ...AlunoFragment
  }
}
    ${AlunoFragmentFragmentDoc}`;

/**
 * __useGetAlunosQuery__
 *
 * To run a query within a React component, call `useGetAlunosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAlunosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAlunosQuery({
 *   variables: {
 *      nome: // value for 'nome'
 *      cpf: // value for 'cpf'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetAlunosQuery(baseOptions?: Apollo.QueryHookOptions<GetAlunosQuery, GetAlunosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAlunosQuery, GetAlunosQueryVariables>(GetAlunosDocument, options);
      }
export function useGetAlunosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAlunosQuery, GetAlunosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAlunosQuery, GetAlunosQueryVariables>(GetAlunosDocument, options);
        }
export type GetAlunosQueryHookResult = ReturnType<typeof useGetAlunosQuery>;
export type GetAlunosLazyQueryHookResult = ReturnType<typeof useGetAlunosLazyQuery>;
export type GetAlunosQueryResult = Apollo.QueryResult<GetAlunosQuery, GetAlunosQueryVariables>;