const apis = () => {
    const isLocalhost = window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1";

    const local = isLocalhost
        ? "http://localhost:4044"           // ← NO trailing slash
        : "https://ems-backend-99v4.onrender.com";  // ← NO trailing slash
    const list = {
        registerUser: `${local}user/register`,
        loginUser: `${local}user/login`,
        getUserDetails: `${local}user/getUserDetails`,
        logout: `${local}user/logout`,

    }

    return list
}

export default apis; 