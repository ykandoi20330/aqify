import React from 'react'

const ChangePassword = () => {
    return (
        <>
            <div className="sideContent">
                
                <div>
                    <h1 style={{ fontWeight: '700', paddingBottom: '0.5rem' }}>Change Password</h1>
                    <span style={{ color: '#636363' }}>Update your email or password below</span>
                </div>

                <div className="password-card">
                <div class="mb-3 my-3">
                        <label for="exampleFormControlInput1" class="form-label" style={{color:'#636363'}}>Current Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="akashkumar0007@gmail.com"/>
                    </div>
                    <div class="mb-3 my-3">
                        <label for="exampleFormControlInput1" class="form-label" style={{color:'#636363'}}>Current Password</label>
                        <input type="password" class="form-control"  id="exampleFormControlInput1" placeholder="akashkumar0007"/>
                    </div>
                    <button class="password-btn btn btn-primary my-3 rounded-pill" type="submit" style={{width:'30%', padding:"0.9rem 1.5rem"}}>Save changes</button>
                    </div>
            </div>
        </>
    )
}

export default ChangePassword