import axios from "axios";

type SignUpFields = {
    orderName: string;
    password: string
}
export function signUpApi(signUpFields: SignUpFields) {
    console.log('sign', signUpFields)
    return axios({
        method: 'post',
        url: '/Account/SignUp',
        data: signUpFields,
    })
        .then( (response) => {
            return response.data
        })
}