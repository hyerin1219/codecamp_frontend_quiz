import { atom } from "recoil";


export const accessTokenState = atom({
    key: "accessTokenState",
    default: ""
})

export const visitedPageState = atom({
    key: "visitedPage",
    default: ""
})