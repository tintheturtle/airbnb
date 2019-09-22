import React from 'react';

import './styles/Footer.css'

export default class Footer extends React.Component {
    render() {
        return (
        <div className="main-footer"> 
            <div className="widget-section"> 
                <div className="auto-container">
                    <div className="row">

                        <div className="big-column col-xl-7 col-lg-12 col-md-12">
                            <div className="row">
                                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h2 className="widget-title"> Useful Links</h2>
                                        <div className="widget-content">
                                            <ul className="list">
                                                <li> <a href="https://www.facebook.com/neivsa/"></a> Help </li>
                                                <li> <a href="https://www.facebook.com/neivsa/"></a> Terms </li>
                                                <li> <a href="https://www.facebook.com/neivsa/"></a> Privacy </li>
                                                <li> <a href="https://www.facebook.com/neivsa/"></a> Security </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h2 className="widget-title"> Connect With Us!</h2>
                                        <div className="widget-content">
                                            <ul className="list">
                                                <li> <a href="https://www.facebook.com/neivsa/"></a> FaceBook </li>
                                                <li> <a href="https://www.facebook.com/neivsa/"></a> Twitter </li>
                                                <li> <a href="https://www.facebook.com/neivsa/"></a> Instagram </li>
                                                <li> <a href="https://www.facebook.com/neivsa/"></a> SnapChat </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>

    
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="copyright-text">
                        © Copyright 2019 GasBnB
                    </div>
                </div>
            </div>
        </div>

        )
    }
}