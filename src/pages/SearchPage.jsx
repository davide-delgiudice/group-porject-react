import React from 'react'
import HomePage from './HomePage'
import { Link } from 'react-router-dom'

const SearchPage = () => {
    return (
        <div>
            <div className="container">
                <h1>pagina di ricerca</h1>
                <Link className="btn btn-primary mb-4" to="/" >torna a Homepage</Link>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <input type="text" className="form-control mb-1" placeholder='cerca' />
                            <button className="btn btn-main text-bg-danger" type='submit' >
                                Ricerca
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default SearchPage
