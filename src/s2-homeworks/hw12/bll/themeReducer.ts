const initState: stateType = {
    themeId: 1,
}
export type stateType = {
    themeId: number
}
type changeThemeIdAC = ReturnType<typeof changeThemeId>

export const themeReducer = (state = initState, action: changeThemeIdAC): stateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':

            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
