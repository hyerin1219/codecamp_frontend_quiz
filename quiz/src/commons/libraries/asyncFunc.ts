import type { FormEvent } from "react"

export const wrapFormAsync= (asyncFunc: () => Promise<void>) => (event:FormEvent<HTMLInputElement>) => {
    event?.preventDefault()
    void asyncFunc()
} 

export const wrapAsync= (asyncFunc: () => Promise<void>) => () => {
    void asyncFunc()
} 