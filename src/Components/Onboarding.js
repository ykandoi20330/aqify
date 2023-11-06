import { useCallback } from "react";
import styles from "./Onboarding.module.css";
// import comp1 from "./Onboard/component-1.svg"
// import comp2 from "./Onboard/component-11.svg"
// import frame1 from "./Onboard/frame-119.svg"
// import frame2 from "./Onboard/frame-1191.svg"
import background from "./Onboard/unsplash5u-28ojjgms@2x.png"
import { Link } from "react-router-dom";

const Onboarding = () => {
  const onFrameContainer9Click = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  return (
    <div className={styles.onboarding}>
      <div className={styles.unsplash5u28ojjgmsParent}>
        <img
          className={styles.unsplash5u28ojjgmsIcon}
          alt=""
          src={background}
        />
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.frameDiv}>
                  <div className={styles.howDidYouHearAboutAcqifyWrapper}>
                    <div className={styles.howDidYou}>
                      How did you hear about Acqify?*
                    </div>
                  </div>
                  <div className={styles.component1focus8Wrapper}>
                    
                    <select style={{color:'#c0c0c0'}} class="form-select component1focus8" aria-label="Default select example">
                      <option selected><i style={{color:'#fff'}} class="fa-solid fa-user-group"></i>Select one</option>
                      <option value="1">Instagram</option>
                      <option value="2">Facebook</option>
                      <option value="3">Twitter</option>
                      <option value="3">LinkedIn</option>
                    </select>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.howDidYouHearAboutAcqifyWrapper}>
                    <div className={styles.howDidYou}>
                      Where are you located?*
                    </div>
                  </div>
                  <div className={styles.component1focus8Wrapper}>
                    {/* <div className={styles.component1focus8}>
                      <img
                        className={styles.component1focus8Child}
                        alt=""
                        src={frame2}
                      />
                      <div className={styles.frameParent1}>
                        <div className={styles.selectOneWrapper}>
                          <div className={styles.howDidYou}>Select one</div>
                        </div>
                        <img
                          className={styles.component1Icon}
                          alt=""
                          src={comp2}
                        />
                      </div>
                    </div> */}
                    
                    <select style={{color:'#c0c0c0'}} class="form-select component1focus8" aria-label="Default select example">
                      <option selected><i class="fa-solid fa-location-dot" style={{color: "#ffffff"}}></i>Select one</option>
                      <option value="1">India</option>
                      <option value="2">USA</option>
                      <option value="3">Chaina</option>
                      <option value="3">Europe</option>
                    </select>
                  </div>
                </div>
              </div>
              <div
                className={styles.continueWrapper}
                onClick={onFrameContainer9Click}
              >
                <div className={styles.howDidYou}><Link style={{textDecoration:'none',color:'#fff'}} to="/MainDashboard">Continue</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
