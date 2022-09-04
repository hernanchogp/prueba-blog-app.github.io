import '@fortawesome/fontawesome-free/css/all.min.css';
const PostHome = props => {

    return (
        <div className="col-lg-4 mb-3 d-flex " data-bs-toggle="tooltip" data-bs-placement="right" title={props.data.text}>
            <div className="card cardSize mt-2" >
                <img src={props.data.image} className=" rounded card-img-top ImgSize" alt={props.data.publishDate} />
                <div className="card-body ">
                    <h5 className="card-title">{props.data.owner.firstName + ' ' + props.data.owner.lastName}</h5>
                    <p className='small'>{FormatearFecha(new Date(props.data.publishDate))}</p>
                    <p className="card-text">
                        <span className="small font-weight-light">{props.data.text}</span>
                    </p>
                </div>
                <div className='card-footer'>

                    <div className='text-left'>
                        <i className="fa-regular fa-thumbs-up text-primary"></i> {props.data.likes + '  '}
                        {props.data.tags.length === 0 ? (
                            <div>Loading...</div>
                        ) : (
                            props.data.tags.map((e, i) => {
                                return <Tags tag={e} key={i} />
                            })
                        )}
                    </div>

                </div>
            </div>
        </div>

    );
}

const PostPublicaciones = props => {

    return (
        <div className="card mb-3" data-bs-toggle="tooltip" data-bs-placement="right" title={props.data.text}>
            <div className="row ">
                <div className="col-md-4">
                    <img src={props.data.image} className="card-img ImgSize" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="chip bg-light">
                            <img src={props.data.owner.picture} alt="Person" width="96" height="96" />
                            {props.data.owner.firstName + ' ' + props.data.owner.lastName}

                        </p>

                        <p className="card-text">
                            {props.data.text}
                        </p>

                        <p className="card-text">
                            {props.data.tags.length === 0 ? (
                                <div>Loading...</div>
                            ) : (
                                props.data.tags.map((e, i) => {
                                    return <Tags tag={e} key={i} />
                                })
                            )}
                        </p>
                    </div>
                    <div className='card-footer'>
                        <div className="row">
                            <div className="col-8">
                                <i className="fa-regular fa-thumbs-up text-primary"></i> {props.data.likes + '  '}
                            </div>
                            <div className="col-4">{FormatearFecha(new Date(props.data.publishDate))}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

const Tags = props => {
    return (

        <span className="badge bg-info px-2 py-1 border mr-1 mb-1">{props.tag + ' '}</span>



    )
}



function fecha(num) {
    return num.toString().padStart(2, '0');
}

function FormatearFecha(date) {
    return (
        [
            fecha(date.getDate()),
            fecha(date.getMonth() + 1),
            date.getFullYear(),
        ].join('-') +
        ' ' +
        [
            fecha(date.getHours()),
            fecha(date.getMinutes()),
            fecha(date.getSeconds()),
        ].join(':')
    );
}

export {
    PostHome,
    PostPublicaciones
}