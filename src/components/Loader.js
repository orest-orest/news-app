import React from 'react'
import {useSelector} from 'react-redux'

export function Loader() {

    const load = useSelector(state => state.loader.loading);

    if (load) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    } else {
        return null
    }


}