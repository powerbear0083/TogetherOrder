import axios from "axios";

type SignUpFields = {
    name: string;
    password: string
}
export function signUpApi(signUpFields: SignUpFields) {
    console.log('sign', signUpFields)
    return axios({
        method: 'post',
        url: 'http://localhost:58656/Account/SignUp',
        data: signUpFields,
    })
        .then( (response) => {
            return response.data
        })
}