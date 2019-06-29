export const APP_ACTIONS = {
    UPLOAD_DOCUMENT: 'UPLOAD_DOCUMENT'
}

export function uploadDocument(document) {
    return {
        type: APP_ACTIONS.UPLOAD_DOCUMENT,
        payload: {
            document
        }
    }
}
