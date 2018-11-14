const authLogin = () => {

    if (localStorage.getItem('userInfo') != null) {

        var user_info = JSON.parse(localStorage.getItem('userInfo'))
        return user_info
    }





}

export default {
    authLogin
}