import axios from 'axios';

const URL = 'http://localhost:3000/api';

export const loginUser = async(form) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + '/users/login',
            data: form
        })

        const access_token =  result.data.access_token;
        localStorage.setItem("token", access_token);
        return "success";

    } catch(err) {
        console.log(err);
        return "error"
    }
};

const registerUser = async(form) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + '/users/register',
            data: form
        })
        console.log(result.data);
    } catch(err) {
        console.log(err);
    }
}

// export {
//     loginUser, registerUser
// }