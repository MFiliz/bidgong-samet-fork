import React from 'react';

const Loading = props => {
    document.body.className='page-top';
    return (
        <header className="masthead">
            <div className="container d-flex h-100 align-items-center">
                <div className="mx-auto text-center">
                    <img src="/assets/img/splash.png" className="img-fluid" alt="" />
                </div>
            </div>
        </header>
    );
};

export default Loading;