import React from 'react';

function Login(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div class="card">
                        <img class="card-img-top" src="holder.js/100x180/" alt="" />
                        <div class="card-body">
                            <h4 class="card-title">Login</h4>
                            <form action={props.handleLogin}>
                                <div className="form-group">
                                    <label for="">Email</label>
                                    <input type="text" className="form-control" name="email" id="" aria-describedby="helpId" placeholder="Email" />
                                    <label for="">Password</label>
                                    <input type="text" className="form-control" name="password" id="" aria-describedby="helpId" placeholder="Password" />
                                    <button type="submit" className="btn btn-primary btn-block" name="" id="">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;