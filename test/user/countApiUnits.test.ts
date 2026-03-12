import { client } from "..";

client
    .countApiUnits()
    .then((data) => {
        console.log("API Units Balance:", data);
    })
    .catch((error) => {
        console.error("Error fetching API units:", error);
    });
