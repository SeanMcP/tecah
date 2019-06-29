import React from 'react'
import { Router } from '@reach/router'
import UploadView from 'views/upload/UploadView'

export default function() {
    return (
        <Router>
            <UploadView path="/" />
        </Router>
    )
}
