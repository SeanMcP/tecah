import React from 'react'
import { useAppStore } from 'store/app/AppStore'
import { uploadDocument } from 'store/app/AppActions'
import DocumentPreview from 'components/upload/DocumentPreview/DocumentPreview'

function UploadView(props) {
    const [state, dispatch] = useAppStore()
    function handleFile(e) {
        e.preventDefault()
        const file = e.target.files[0]
        if (file) {
            dispatch(uploadDocument(file))
        }
    }
    return (
        <div>
            <h1>Let's upload a document</h1>
            {state.document ? (
                <DocumentPreview file={state.document} />
            ) : (
                <label>
                    <b>Select document</b>
                    <input type="file" name="document" onChange={handleFile} />
                </label>
            )}
        </div>
    )
}

export default UploadView
