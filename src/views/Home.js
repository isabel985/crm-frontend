import React from 'react';

function Home() {
    return (
        <div className="container home">
            <div className="row">
                <div className="col-md-8">
                    <div className="home-md">
                        <p>Welcome to Capstone CRM</p>
                    </div>
                </div>
                <div className="col-md-2 left">
                    <p>Overview</p>
                    <div className="home-sm">Date</div>
                    <div className="home-sm">Weather</div>
                </div>
                <div className="col-md-2 right">
                    <div className="home-sm">Reach</div>
                    <div className="home-sm">Engagements</div>
                </div>
            </div>
        </div>
    )
}

export default Home;