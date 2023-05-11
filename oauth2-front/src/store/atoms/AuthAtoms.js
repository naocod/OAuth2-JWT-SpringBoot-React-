import { atom } from "recoil";

export const authenticationState = atom({
    key: "authentication",
    default: false
});