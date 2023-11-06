import { useCallback } from "react";
import styles from "./SignIn.module.css";
// import frame1 from "./SignIn/frame-119.svg"
// import frame2 from "./SignIn/frame-1191.svg"
import google from "./SignIn/google-svg.svg"
import background from "./SignIn/unsplash5u-28ojjgms@2x.png"
import vector from "./SignIn/vector.svg"
import { Link } from "react-router-dom";

const SignIn = () => {
  const onDontHaveAnyClick = useCallback(() => {
    // Please sync "Sign up" to the project
  }, []);

  const onFrameContainer9Click = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  const onFrameContainer13Click = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  return (
    <div className={styles.signIn}>
      <div className={styles.unsplash5u28ojjgmsParent}>
        <img
          className={styles.unsplash5u28ojjgmsIcon}
          alt=""
          src={background}
        />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper1}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src={vector}
                  />
                  <div className={styles.acqify}>Acqify</div>
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameParent1}>
                <div className={styles.welcomeBackParent}>
                  <b className={styles.welcomeBack}>Welcome Back</b>
                  <div
                    className={styles.dontHaveAnyContainer}
                    onClick={onDontHaveAnyClick}
                  >
                    <span>{`Don’t have any account? `}</span>
                    <span className={styles.joinNow}>Join now</span>
                  </div>
                </div>
                <div className={styles.component1focus8Parent}>
                  <div class="form-floating mb-3 component1focus8">
                    <input type="text" class="form-control" id="floatingInput" placeholder="" style={{ background: "#121314", color: '#c0c0c0', border: "none" }} />
                    <label for="floatingInput"><i style={{ color: '#fff' }} class="fa-regular fa-envelope mx-2"></i></label>
                  </div>

                  <div className={styles.component1focus8Group}>
                    <div class="form-floating mb-3 component1focus8">
                      <input type="email" class="form-control" id="floatingInput" placeholder="" style={{ background: "#121314", color: '#c0c0c0', border: "none" }} />
                      <label for="floatingInput"><i style={{ color: '#fff' }} class="fa-solid fa-shield-cat mx-2"></i></label>
                    </div>
                    <div className={styles.forgotPassword}>
                      Forgot Password?
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={styles.joinWrapper}
                onClick={onFrameContainer9Click}
              >
                <div className={styles.labelName}>
                  <Link style={{textDecoration:'none',color:'#fff'}}  to="/MainDashboard">Join</Link>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.or}>OR</div>
              <div className={styles.frameChild} />
            </div>
            <div
              className={styles.frameWrapper2}
              onClick={onFrameContainer13Click}
            >
              <div className={styles.googleSvgParent}>
                <img
                  className={styles.googleSvgIcon1}
                  alt=""
                  src={google}
                />
                <div className={styles.labelName}>Sign up with Google</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
