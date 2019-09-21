import React from 'react';

import './styles/Footer.css'

export default class Footer extends React.Component {
    render() {
        return (
        <div className="main-footer"> 
            <div className="widget-section"> 
                <div className="auto-container">
                    <div className="row">
                        <div className="big-column col-xl-5 col-lg-12 col-md-12">
                            <div className="footer-column about-widget">
                                <h2 className="widget-title"> Event Details </h2>
                                <div className="date"> Saturday, Janurary 25 2020</div>
                                <div className="address"> Boston, MA </div>

                            </div>
                        </div>

                        <div className="big-column col-xl-7 col-lg-12 col-md-12">
                            <div className="row">
                                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h2 className="widget-title"> Useful Links</h2>
                                        <div className="widget-content">
                                            <ul className="list">
                                                <li> <a href="https://www.facebook.com/neivsa/"></a> FaceBook </li>
                                                <li> <a href="https://www.facebook.com/neivsa/"></a> FaceBook </li>
                                                <li> <a href="https://www.facebook.com/neivsa/"></a> FaceBook </li>
                                                <li> <a href="https://www.facebook.com/neivsa/"></a> FaceBook </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="footer-widget social-widget">
                                    <h2 className="widget-title"> Social Updates</h2>
                                    <div className="widget-content"> 
                                        <div className="text"> New England InterCollegiate Vietnamese Student Association</div>
                                        <ul className="social-icon-one">
                                        <li> <a href="https://www.facebook.com/neivsa/"></a> FaceBook </li>
                                                <li> <a href="https://www.facebook.com/neivsa/"></a> FaceBook </li>
                                                <li> <a href="https://www.facebook.com/neivsa/"></a> FaceBook </li>
                                                <li> <a href="https://www.facebook.com/neivsa/"></a> FaceBook </li>
                                        </ul>
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
                        © Copyright 2019 Design by <a href="#"> Droitthemes </a>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}