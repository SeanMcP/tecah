import React from 'react'

function UploadView(props) {
    return (
        <div>
            <h1>Let's upload a document</h1>
            <form onSubmit={() => {}}>
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
