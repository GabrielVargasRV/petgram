import {gql,useMutation} from '@apollo/client';

const REGISTER = gql`
mutation signup($input:UserCredentials!){
    signup(input:$input)
}
`

export const useRegisterMutation = () => {
    const [resgisterMutation] = useMutation(REGISTER)
    return{
        resgisterMutation
    }
}
