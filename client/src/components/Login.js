import React from 'react'

function Login() {
    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password" />
                </div>
                <div class="form-group">
                    <label for="password">Confirm Password</label>
                    <input type="password" class="form-control" id="passwordConfirm" placeholder="Password" />
                </div>
             
                <button type="submit" class="btn" style={{backgroundColor:"#275251", color:"#ece0cd", margin:"5px"}}>Submit</button>
            </form>
        </div>
    )
}

export default Login