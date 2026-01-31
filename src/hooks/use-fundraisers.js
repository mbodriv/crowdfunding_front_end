//we import these two because our app needs to store data and run code at the same time
import { useState, useEffect } from "react";

import getFundraisers from "../api/get-fundraisers";

export default function useFundraisers() {
//fundraisers hold the data we get from the backend and starts as an empty array because at first we have nothing.
  const [fundraisers, setFundraisers] = useState([]);

  // We also create a state variable called isLoading and error to keep track of the loading state and any errors that might occur.
  //is Loading starts as true because when the screen first loads, we are still waiting for the data.
  //error exists so we can store any problem that happens
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

//the useeffect function only runs once, when the screen appears. The empty array [] is the reason. 
  useEffect(() => {
    getFundraisers()
      .then((fundraisers) => {
        setFundraisers(fundraisers);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  // Finally, we return the state variables and the error. As the state in this hook changes it will update these values and the component using this hook will re-render.
  return { fundraisers, isLoading, error };
}

//This custom hook useFundraisers fetches the fundraisers data from the backend when a component first appears on the screen. 
// It keeps track of the data, whether it’s still loading, and if any errors happen, using state variables. As the data or error state changes, 
// React automatically updates (re-renders) the component that uses this hook, so the screen always shows the latest information.