import { gql, useMutation } from '@apollo/client';

const LOGIN = gql`
mutation login($input: UserCredentials!){
    login (input:$input)
}
`

export const useLoginMutation = (email, password) => {
    const [mutation, { data, error, loading }] = useMutation(LOGIN)
    const loginUser = (email, password) => {
        const res = mutation({ variables: { input: { email, password } } })
        return res
    }
    return { loginUser, data, error, loading }
}