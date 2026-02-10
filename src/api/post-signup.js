async function postSignup(email,username, password, first_name, last_name, user_type){
    const url = `${import.meta.env.VITE_API_URL}/users/`;
    const response = await fetch(url, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
            "username": username,
            "first_name":first_name,
            "last_name":last_name,
            "user_type":user_type
        })
    });
    if (!response.ok) {
        const fallbackError="Error signing up";
        const data = await response.json().catch(() => {
            throw new Error (fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    return await response.json();
}

export default postSignup;