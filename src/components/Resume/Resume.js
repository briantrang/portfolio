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
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
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
                        <a href={props.link} target="_blank" rel="noopener noreferrer"> 
                             &nbsp;Direct Link
                            </a>
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <iframe 
                            className="iframe"
                            title="resume" 
                            src={props.link} 
                        > 
                        </iframe>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}

export default Resume;