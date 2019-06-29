import React from 'react'
import FileViewer from 'react-file-viewer'

function getExtension(name) {
    return name.slice(name.lastIndexOf('.') + 1)
}

function DocumentPreview({ file }) {
    const path = URL.createObjectURL(file)
    const type = getExtension(file.name)
    return (
        <div>
            <h2>Preview</h2>
            <FileViewer filePath={path} fileType={type} />
        </div>
    )
}

export default DocumentPreview
