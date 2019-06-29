import React from 'react'
import { useAppStore } from 'store/app/AppStore'
import { uploadDocument } from 'store/app/AppActions'

function UploadView(props) {
    const [, dispatch] = useAppStore()
    function handleSubmit(e) {
        e.preventDefault()
        const data = new FormData(e.target)
        const document = data.get('document')
        if (document) {
            dispatch(uploadDocument(document))
            e.target.reset()
        } else {
            alert('Select a document to upload')
        }
    }
    return (
        <div>
            <h1>Let's upload a document</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <b>Select document</b>
                    <input type="file" name="document" />
                </label>
                <button>Upload</button>
            </form>
        </div>
    )
}

export default UploadView
