import React, { useEffect, useState } from "react";
import { UidContext } from "./components/AppContext";
import Routes from "./components/Routes";
import Axios from "axios";

function App() {

  const [uid,setUid] = useState(null);

  useEffect(() => {
    async function fetchData(){
      await Axios({
        method:'get',
        url:`${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials:true
      })
      .then((res) => {
        setUid(res.data)
      })
      .catch((err) => console.log('no token'))
    }
    fetchData()
  }, [uid]);

  return (
    <div>
      <UidContext.Provider value={uid} >
         <Routes />
      </UidContext.Provider>
      
    </div>
  );
}

export default App;
