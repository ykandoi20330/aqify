import { useCallback } from "react";
// import styles from "./SignUp.module.css";
import vector1 from "./SignUp/vector.svg"
import vector2 from "./SignUp/vector1.svg"
// import frame1 from "./SignUp/frame-119.svg"
// import frame2 from "./SignUp/frame-1191.svg"
// import frame3 from "./SignUp/frame-1192.svg"
import google from "./SignUp/google-svg.svg"
import background from "./SignUp/unsplash5u-28ojjgms@2x.png"
import { Link } from "react-router-dom";


const SignUp = () => {
  const onFrameContainer8Click = useCallback(() => {
    // Please sync "Onboarding" to the project
  }, []);

  const onAlreadyHaveAnClick = useCallback(() => {
    // Please sync "Sign in" to the project
  }, []);

  const onFrameContainer22Click = useCallback(() => {
    // Please sync "Onboarding" to the project
  }, []);

  return (
    <div className="signUp">
      <div className="unsplash5u28ojjgmsParent">
        <img
          className="unsplash5u28ojjgmsIcon"
          alt=""
          src={background}
        />
        <div className="frameParent">
          <div className="frameWrapper">
            <div className="frameGroup">
              <div className="frameContainer">
                <div className="frameDiv">
                  <div className="vectorParent">
                    <img
                      className="vectorIcon"
                      alt=""
                      src={vector1}
                    />
                    <div className="acqify">Acqify</div>
                  </div>
                </div>
              </div>
              <b className="signUpFor">
                Sign up for a free account to access the Marketplace
              </b>
              <div className="makeYourProfile">
                Make your profile to negotiate directly with founders of vetted
                $100K+ revenue startups, scale-ups and SMBs.
              </div>
            </div>
          </div>
          <div className="frameWrapper1">
            <div className="frameParent1">
              <div className="frameParent1">
                <div
                  className="frameParent3"
                  onClick={onFrameContainer8Click}
                >
                  <div className="joinNowOnAcqifyParent">
                    <b className="joinNowOn">Join now on Acqify</b>
                    <div
                      className="alreadyHaveAnContainer"
                      onClick={onAlreadyHaveAnClick}
                    >
                      <span>{`Already have an account? `}</span>
                      <span className="logIn">Log in</span>
                    </div>
                  </div>
                  <div className="frameWrapper2">
                    <div className="googleSvgParent">
                      <img
                        className="googleSvgIcon"
                        alt=""
                        src={google}
                      />
                      <div className="signUpWith">
                        Sign up with Google
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rectangleParent">
                  <div className="frameChild" />
                  <div className="or">OR</div>
                  <div className="frameChild" />
                </div>
                <div className="component1focus8Parent">
                  <div class="form-floating mb-3 component1focus8">
                    <input type="text" class="form-control" id="floatingInput" placeholder="" style={{ background: "#121314", color: '#c0c0c0', border: "none" }} />
                    <label for="floatingInput"><i style={{color:'#fff'}}  class="fa-regular fa-user mx-2"></i></label>
                  </div>

                  <div class="form-floating mb-3 component1focus8">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" style={{ background: "#121314", color: '#c0c0c0', border: "none" }} />
                    <label for="floatingInput"><i style={{color:'#fff'}}  class="fa-regular fa-envelope mx-2"></i></label>
                  </div>

                  <div className="component1focus8Group">
                    <div class="form-floating mb-3 component1focus8">
                      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" style={{ background: "#121314", color: '#c0c0c0', border: "none" }} />
                      <label for="floatingInput"><i style={{color:'#fff'}} class="fa-solid fa-shield-cat mx-2"></i></label>
                    </div>
                    <div className="minimum8Characters">
                      Minimum 8 characters
                    </div>
                  </div>
                  <div className="indicateYourMainAccountTypParent">
                    <div className="signUpWith">
                      Indicate your main account type
                    </div>
                    <div className="frameParent4">
                      <div className="frameParent5">
                        <div className="vectorWrapper">
                          <img
                            className="vectorIcon1"
                            alt=""
                            src={vector2}
                          />
                        </div>
                        <div className="signUpWith">
                          Owner ( Seller )
                        </div>
                      </div>
                      <div className="frameParent5">
                        <div className="vectorWrapper">
                          <img
                            className="vectorIcon1"
                            alt=""
                            src={vector2}
                          />
                        </div>
                        <div className="signUpWith">
                          Acquirer (buyer)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="joinWrapper"
                onClick={onFrameContainer22Click}
              >
                <div className="signUpWith"><Link style={{textDecoration:'none',color:'#fff'}} to="/onboard">Join</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default SignUp;
