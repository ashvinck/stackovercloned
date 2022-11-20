import { useParams } from "react-router-dom";
import { API } from "../../Global";

export function fetchData() {
    return (
        fetch(`${API}/home`, {
            method: "GET",
        })
            .then(res => res.json())
    )

}