import { ConnectedUser } from "../../interface/ConnectedUser";

const api_url = "http://localhost:3001/";



export const connectedUser = async (data:any) => {
    const connect: ConnectedUser = data;

    const response = await fetch(
      api_url + "user/connected",
      {
        method: "POST",
        headers: {
         // Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(connect),

      }
    );
    return response;
  };
  