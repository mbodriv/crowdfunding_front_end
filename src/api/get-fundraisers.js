//we are creating a function whose job is to get data from somewhere else (a server)
//Because talking to a server takes time, we mark the function as async so the app does not freeze while waiting.
async function getFrundraisers() {
//We are building the full address of where the data lives. Instead of hard-coding the server address, we read it from the environment (this lets the app work in different places: local, test, production).
    const url = `${import.meta.env.VITE_API_URL}/fundraisers`;
//We are sending a request to the server with a GET method. Because we only want to read the data.
//We use await because we want to wait until the server replies. Response is the server reply, but not the data yet.
    const response = await fetch (url, {method: "GET"})
//If response ok is false, then something has failed, or data is not reusable, or we should stop and report the problem    
    if (!response.ok){
//we prepare a default error message if this happens.
        const fallbackError = "Error fetching fundraisers"
//we try to read the server's error message. This function does two things:
//1.converts the server response into usable data
//2.handles handles the case where the response is not valid JSON
        const data = await response.json().catch(() => {
            throw new Error (fallbackError);
        });
//which decide which error message to show.
//if the server sent a message, we use it. Otherwise, the fallback message is used. 
        const errorMessage = data?.detail?? fallbackError;
//We stop everything and send the error upward to whoever called this function.
        throw new Error(errorMessage);
    }
//if everything went well, We convert the response into actual data. We return it so the rest of the app can use it.
    return await response.json();
}

export default getFrundraisers;

//This function safely requests fundraisers data from the backend and converts the response into usable JSON.
//If anything goes wrong, it stops the process and throws a clear error so the app can handle it properly.