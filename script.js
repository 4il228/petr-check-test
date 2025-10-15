const loogin = () => {
    const login = document.getElementById("login").value
    const password = document.getElementById("password").value

    if ( login == "admin" && password == "admin") {
        alert("Вы успешно авторизировались!")
    }
    else {
        alert("Доступ запрещен")
}
}