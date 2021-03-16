import React, { useRef, useState, useEffect, useContext } from "react";
import { Image } from "react-bootstrap";
import { Slide } from "react-slideshow-image";
import { AppContext } from "../../context/AppContext";
import GFEBS from "../../img/GFEBS.png";
import Conclusion from "../../img/conclusion.png";

function Slides() {
  // State management
  const slideRef = useRef();
  const context = useContext(AppContext);

  const [key, setKey] = useState();

  // Calculates and sets progress bar percentage after every slide change
  useEffect(() => {
    context.toggleProgress();

    // Removes back arrow on first slide
    if (context.currentSlide === 1) {
      document.querySelector(
        "#root > div > div.mx-auto.my-auto > div > div > div.undefined.nav"
      ).style.display = "none";
    } else {
      document.querySelector(
        "#root > div > div.mx-auto.my-auto > div > div > div.undefined.nav"
      ).style.display = "block";
    }

    // Removes next arrow on final slide
    if (context.currentSlide === context.total) {
      document.querySelector(
        "#root > div > div.mx-auto.my-auto > div > div > div.next-arrow.nav"
      ).style.display = "none";
    } else {
      document.querySelector(
        "#root > div > div.mx-auto.my-auto > div > div > div.next-arrow.nav"
      ).style.display = "block";
    }
  }, [context]);

  // On page load, this populates the index dropdown and hides back arrow on page one to
  useEffect(() => {
    context.compileIndex();
  }, []);

  // Changes slide to specific index from dropdown menu
  useEffect(() => {
    slideRef.current.goTo(parseInt(context.currentSlide, 10));
  }, [context.currentSlide]);

  // Resets Quiz key to random number and rerenders it... there's probably a better way to do this.
  function retakeQuiz() {
    return setKey(Math.random());
  }

  // React-Slideshow package settings
  const properties = {
    indicators: false,
    arrows: true,
    autoplay: false,
    canSwipe: false,
    defaultIndex: 0,
    prevArrow: (
      <div style={{ width: "30px", marginRight: "-30px" }}>
        <i className="fas fa-arrow-left"></i>
      </div>
    ),
    nextArrow: (
      <div
        className="next-arrow"
        style={{ width: "30px", marginLeft: "-30px" }}
      >
        <i className="fas fa-arrow-right"></i>
      </div>
    ),
    onChange: (previous, next) => {
      context.onSlideChange(previous, next);
    },
  };

  // Sets post-quiz state
  const onCompleteAction = (obj) => {
    document.querySelector(".next-arrow").style.display = "block";
    context.onQuizCompletion();
  };

  // Renders custom results page
  const renderCustomResultPage = (obj) => {
    return (
      <div>
        <h4>Well done, you may now continue with the lesson.</h4>
        <button onClick={retakeQuiz} className="btn btn-primary">
          Retake
        </button>
      </div>
    );
  };

  return (
    <>
      <div
        className="mx-auto my-auto"
        style={{
          top: "300px",
          height: "500px",
          width: "900px",
          backgroundColor: "#f4f4f4",
        }}
      >
        <Slide ref={slideRef} easing="ease" {...properties}>
          <div className="slide">
            <div className="row p-3 m-1">
              <div className="col">
                <h3 className="slide-title">Financial Reporting</h3>
                <span>
                  This concludes the Financial Reporting course. In this course,
                  we discussed the background of financial reporting, the
                  benefits of reporting in GFEBS, what systems interface with
                  GFEBS, how data is recorded, when the data is reconciled, and
                  the role ECC & BI plays in the process. We also covered
                  reporting standards, how the standards became common, key
                  roles involved, and we discussed responsible business areas.
                </span>
              </div>
              <div className="col">
                <Image fluid className="slide-image" src={GFEBS} alt="" />
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="row p-3 m-1">
              <div className="col">
                <h3 className="slide-title">Conclusion</h3>
                <h4>This concludes the course, Financial Reporting.</h4>
                <p>
                  You may exit this course by clicking the <strong>Exit</strong>{" "}
                  button.
                </p>
              </div>
              <div className="col">
                <Image
                  fluid
                  className="slide-image"
                  src={Conclusion}
                  alt="conclusion"
                />
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}

export default Slides;
