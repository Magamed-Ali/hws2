import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const newArr = [...state]
            if("up" === action.payload){
                newArr.sort((a, b) => a.name > b.name ? 1 : -1)
            }else if("down" === action.payload){
                newArr.sort((a, b) => a.name > b.name ? 1 : -1).reverse()
            }

            return newArr // need to fix
        }
        case 'check': {
            const newState = state.filter(i => i.age >= action.payload)

            return newState // need to fix
        }
        default:
            return state
    }
}
