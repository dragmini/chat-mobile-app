import { ComponentType } from "react"

export type TypeRootStackParamList = {
    Chats: undefined
    Profile: undefined
}

export interface IRoute {
    name: keyof TypeRootStackParamList
    component: ComponentType
}