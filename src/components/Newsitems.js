import React from 'react'

const Newsitems = (props) => {
       return (
        <>
            <div className="card" >
                <img src={props.src} className="card-img-top" alt="..." /> <span className="badge badge-light">9</span>
                <div className="card-body">
                    <h5 className="card-title">{props.title} <span className="badge badge-dark bg-danger"> new</span></h5>
                    <p className="card-text">{props.description}{props.description.length >= 88 ? '...' : ''}</p>
                    <p className="card-text"><small className="text-muted">{props.publisAt}</small></p>
                    <a href={props.newsUrl} target={'_blank'} className="btn btn-dark btn-sm ">Read More..</a>
                </div>
            </div>
        </>
    )
}

export default Newsitems
