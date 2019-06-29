import { APP_ACTIONS } from './AppActions'

export const initialState = {
    document: undefined,
    user: undefined
}

export function reducer(state, { payload, type }) {
    switch (type) {
        case APP_ACTIONS.UPLOAD_DOCUMENT: {
            return {
                ...state,
                document: payload.document
            }
        }
        default: {
            return state
        }
    }
}
