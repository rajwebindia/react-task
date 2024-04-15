import { useState } from 'react';
import {  Row, Col, Button, Modal } from 'react-bootstrap'
import '../Paymentpop/Paymentpop.css'
import sucesstick from '../../assets/imges/tick-circle.svg'

const Paymentpop = () => {
    const [show, setShow] = useState(false)
    const [SubscriberID, setSubscriberID] = useState('')
    const [amount, setAmount] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [isSucessVisible, setIsSucessVisible] = useState(false)


    const popupShow = () => setShow(true)

    const popupClose = () => {
      setSubscriberID('');
      setAmount('');
      setIsVisible(false);
      setShow(false);
  };
    

    const handleSubscriberID = (event) => {
      const {value} = event.target;
      setSubscriberID(value);
      setIsVisible( value && amount )
    }
    
    const handleAmount = (event) => {
      const {value} = event.target;
      setAmount(value);
      setIsVisible( SubscriberID && value )
    }


  return (
    <>
      <Button variant="primary" className="btn-payment"  onClick={popupShow}>Payment</Button>
      <Modal show={show} onHide={popupClose} className="paymen-pop" animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
              <Col md={6}>
                  <div className="input-label">
                      <span>Subscriber ID or mobile number</span>
                  </div>
              </Col>
              <Col md={6}>
                  <div className="input-block">
                      <input type="number"  placeholder='e.g. 1000123456 or 09178139805' onChange={handleSubscriberID}></input>
                  </div>
              </Col>
              </Row>
              <Row>
              <Col md={6}>
                  <div className="input-label">
                      <span>Amount</span>
                  </div>
              </Col>
              <Col md={6}>
                  <div className="input-block">
                      <input type="number" placeholder='Enter amount' onChange={handleAmount}></input>
                  </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className="policy-cont">
                  <p>By clicking <strong>Transfer</strong>, you're affirming your choice to move your balance from this account to the one filled out above. Are you certain you wish to continue?</p>
                </div>
              </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={popupClose}>
            Cancel
          </Button>
          <Button variant="primary" disabled={!isVisible}>
            Transfer
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={isSucessVisible} onHide={popupClose} className="paymen-pop" animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
              <Col md={12}>
                  <div class="trans-cont-msg">
                    <img src={sucesstick} alt="sucessimage"/>
                    <p>Transfer Sucessfull</p>
                   
                  </div>
              </Col>
              </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button varient="primary">close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Paymentpop;