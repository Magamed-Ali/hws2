
export type stateInitType = {
    isLoading: boolean,
}
const initState: stateInitType = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): stateInitType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING':
            state.isLoading = action.isLoading
            return {...state, isLoading: !state.isLoading}

        // пишет студент  // need to fix

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
