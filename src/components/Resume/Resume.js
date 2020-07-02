import React, { useState } from 'react'
import './Resume.scss'
import Modal from 'react-bootstrap/Modal'
import Button from '../UI/Button/Button'

const Resume = props => {
    const [show, setShow] = useState(false);
    return(
        <div>
            <div className="resumeContainer">
                <div className="p-3">
                    <h2>Please feel free to view my resume below.</h2>
                    <p>You'll be able read about my work experiences and projects in detail</p>
                </div>
                <Button style={{cursor: 'pointer'}} onClick={() => setShow(true)} >View my Resume</Button>
                <Modal  
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modalContent"
                >
                    <Modal.Header closeButton>
                    <Modal.Title className="modalTitle">
                        Brian Trang's Resume - 
                        <a href="https://drive.google.com/file/d/1AxwFp25l1GtNYFJlPT4ZmBhROwiB8U02/preview"> 
                             &nbsp;Direct Link
                            </a>
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <iframe 
                            className="iframe"
                            title="resume" 
                            src="https://drive.google.com/file/d/189BXkFQuepNQT-vN7geWog_LcEezm4m3/preview" 
                        > 
                        </iframe>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}

export default Resume;