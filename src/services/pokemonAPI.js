import customAxios from "../utils/customAxios";

export const getPokemon = async () => {

    return await customAxios.get("/api/v2/pokemon/?limit=500");

}