import React, { useRef, useState, useEffect, useContext } from 'react';
import { Slide } from 'react-slideshow-image';
import { AppContext } from '../../context/AppContext';
import Quiz from 'react-quiz-component';
import { quiz } from '../Quiz/Quiz';
import TermsComponent from '../TermsComponent/TermsComponent.js';

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
        '#root > div > div.mx-auto.my-auto > div > div > div.undefined.nav'
      ).style.display = 'none';
    } else {
      document.querySelector(
        '#root > div > div.mx-auto.my-auto > div > div > div.undefined.nav'
      ).style.display = 'block';
    }

    // Removes next arrow on final slide
    if (context.currentSlide === context.total) {
      document.querySelector(
        '#root > div > div.mx-auto.my-auto > div > div > div.next-arrow.nav'
      ).style.display = 'none';
    } else {
      document.querySelector(
        '#root > div > div.mx-auto.my-auto > div > div > div.next-arrow.nav'
      ).style.display = 'block';
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
    defaultIndex: 0,
    prevArrow: (
      <div style={{ width: '30px', marginRight: '-30px' }}>
        <i className='fas fa-arrow-left'></i>
      </div>
    ),
    nextArrow: (
      <div
        className='next-arrow'
        style={{ width: '30px', marginLeft: '-30px' }}
      >
        <i className='fas fa-arrow-right'></i>
      </div>
    ),
    onChange: (previous, next) => {
      context.onSlideChange(previous, next);
    },
  };

  // Sets post-quiz state
  const onCompleteAction = (obj) => {
    document.querySelector('.next-arrow').style.display = 'block';
    context.onQuizCompletion();
  };

  // Renders custom results page
  const renderCustomResultPage = (obj) => {
    return (
      <div>
        <h4>Well done, you may now continue with the lesson.</h4>
        <button onClick={retakeQuiz} className='btn btn-primary'>
          Retake
        </button>
      </div>
    );
  };

  return (
    <>
      <div
        className='mx-auto my-auto'
        style={{
          top: '300px',
          height: '500px',
          width: '900px',
          backgroundColor: '#f4f4f4',
        }}
      >
        <Slide ref={slideRef} easing='ease' {...properties}>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <h3 className='slide-title'>Welcome to Financial Reporting</h3>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, explicabo aliquam voluptatibus, reprehenderit saepe
                  tenetur eaque itaque officia corporis eligendi doloribus vitae
                  non, ratione commodi delectus deserunt ab provident quidem.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, explicabo aliquam voluptatibus, reprehenderit saepe
                  tenetur eaque itaque officia corporis eligendi doloribus vitae
                  non, ratione commodi delectus deserunt ab provident quidem.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, explicabo aliquam voluptatibus, reprehenderit saepe
                  tenetur eaque itaque officia corporis eligendi doloribus vitae
                  non, ratione commodi delectus deserunt ab provident quidem.
                </span>
              </div>
              <div className='col'>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, explicabo aliquam voluptatibus, reprehenderit saepe
                  tenetur eaque itaque officia corporis eligendi doloribus vitae
                  non, ratione commodi delectus deserunt ab provident quidem.
                </span>
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='row'>
              <div className='col-6'>
                <Quiz
                  quiz={quiz}
                  key={key}
                  continueTillCorrect={true}
                  showDefaultResult={false}
                  onComplete={onCompleteAction}
                  customResultPage={renderCustomResultPage}
                />
              </div>
              <div className='col-6 d-flex p-5 justify-content-center'>
                <img
                  style={{ height: '300px' }}
                  src='https://ssilrc.army.mil/resources/FMS/GFEBS/GFEBSLegacy/L413E/1FinancialReporting/html/images/qanda_-_info.png'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='slide'>
            <TermsComponent />
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>title</h3>
                  <p>text</p>
                </div>
              </div>
              <div className='col'>IMAGE</div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>title</h3>
                  <p>text</p>
                </div>
              </div>
              <div className='col'>IMAGE</div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>title</h3>
                  <p>text</p>
                </div>
              </div>
              <div className='col'>IMAGE</div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>title</h3>
                  <p>text</p>
                </div>
              </div>
              <div className='col'>IMAGE</div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>title</h3>
                  <p>text</p>
                </div>
              </div>
              <div className='col'>IMAGE</div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>title</h3>
                  <p>text</p>
                </div>
              </div>
              <div className='col'>IMAGE</div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>title</h3>
                  <p>text</p>
                </div>
              </div>
              <div className='col'>IMAGE</div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>title</h3>
                  <p>text</p>
                </div>
              </div>
              <div className='col'>IMAGE</div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>title</h3>
                  <p>text</p>
                </div>
              </div>
              <div className='col'>IMAGE</div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>title</h3>
                  <p>text</p>
                </div>
              </div>
              <div className='col'>IMAGE</div>
            </div>
          </div>
          <div className='slide'>
            <div className='row p-3 m-1'>
              <div className='col'>
                <div>
                  <h3 className='slide-title'>title</h3>
                  <p>text</p>
                </div>
              </div>
              <div className='col'>IMAGE</div>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}

export default Slides;
