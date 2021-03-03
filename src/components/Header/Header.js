import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../context/AppContext';
import { Button, Modal, ListGroup } from 'react-bootstrap';

import Shield from '../../img/shield.png';

export default function Header() {
  const context = useContext(AppContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleIndexClick(e) {
    const index = e.target.getAttribute('data-rb-event-key');
    context.setCurrentSlide(index);
    setShow(false);
  }

  const closeWindow = () => {
    window.opener = null;
    window.open('', '_self');
    window.close();
  };

  return (
    <>
      <div
        className='blue-banner'
        style={{ width: '100%', height: '25px', backgroundColor: '#009bd1' }}
      ></div>
      <div className='d-flex justify-content-between'>
        <div className='title align-items-end row ml-5 p-3'>
          <div className='p-2'>
            <img style={{ height: '80px' }} src={Shield} alt='' />
          </div>
          <div style={{ lineHeight: '60%' }}>
            <div
              style={{
                color: 'white',
                fontWeight: '800 !important',
                letterSpacing: '.2rem',
                lineHeight: '60%',
              }}
            >
              <h5
                style={{
                  fontWeight: 'bold',
                  lineHeight: '80%',
                }}
              >
                FINANCIAL
              </h5>
              <h5
                style={{
                  fontWeight: 'bold',
                  lineHeight: '80%',
                }}
              >
                MANAGEMENT SCHOOL
              </h5>
            </div>
            <h5
              style={{
                color: '#f5d755',
                fontWeight: 'bold',
                letterSpacing: '1px',
              }}
            >
              GFEBS L413E Financial Reporting
            </h5>
          </div>
        </div>
        <div className='px-4 mt-4 mr-5' style={{ width: '220px' }}>
          <div className='progress mb-3'>
            <div
              className='progress-bar progress-bar-striped bg-success'
              role='progressbar'
              style={{ width: `${context.progress}%` }}
              aria-valuenow={parseInt(`${context.progress}`, 10)}
              aria-valuemin='0'
              aria-valuemax='100'
            ></div>
          </div>
          <div className='d-flex justify-content-between'>
            <Button variant='primary' onClick={handleShow}>
              <FontAwesomeIcon icon={faFolder} /> Index
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header variant='light' closeButton>
                <Modal.Title className=''>
                  <b>INDEX </b>| Financial Reporting
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ListGroup variant='flush'>
                  {context.index &&
                    context.index.map((title, i) => (
                      <ListGroup.Item
                        eventKey={i}
                        key={i}
                        onClick={handleIndexClick}
                      >
                        {title}
                      </ListGroup.Item>
                    ))}
                </ListGroup>
              </Modal.Body>
            </Modal>
            <Button onClick={closeWindow} variant='primary'>
              <FontAwesomeIcon icon={faTimes} /> Exit
            </Button>
          </div>
        </div>
      </div>
      <span
        className='d-flex mx-auto justify-content-end p-1'
        style={{
          width: '900px',
          backgroundColor: '#494949',
          color: 'white',
          fontSize: '27px',
        }}
      >
        Financial Reporting
      </span>
    </>
  );
}
