import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="grid wide footer-info">
                    <div className="row">
                        <div className="col wide l-3 m-6 c-12">
                            <h5>Chăm sóc khách hàng</h5>
                            <ul>
                                <li>
                                    <a href="/#">
                                        Trung tâm trợ giúp
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        Hướng dẫn mua hàng
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        Vận chuyển
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        Thanh toán
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        Chăm sóc khách hàng
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col wide l-3 m-6 c-12">
                            <h5>Liên hệ với RukhShopping</h5>
                            <ul>
                                <li>
                                    <a href="tel:+84 123 456 789">
                                        <ion-icon name="call" />
                                        +84 123 456 789
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+84 987 654 321">
                                        <ion-icon name="call" />
                                        +84 987 654 321
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:RukhShopping@gamil.com">
                                        <ion-icon name="mail" />
                                        RukhShopping@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a href="https://goo.gl/maps/SJqSLm1HWyot8kyH7">
                                        <ion-icon name="location" />
                                        Đồng Nai, Việt Nam
                                    </a>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1002452.5823674551!2d106.60388618320894!3d11.051339238554693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d952b84aea25%3A0xe04ae6f14b6e1655!2zxJDhu5NuZyBOYWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1632469700725!5m2!1svi!2s" allowFullScreen loading="lazy" title="map" />
                                </li>
                            </ul>
                        </div>
                        <div className="col wide l-3 m-6 c-12">
                            <h5>Theo dõi RukhShopping</h5>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/SilverRukh/">
                                        <ion-icon name="logo-facebook" />
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/silver_rukh/">
                                        <ion-icon name="logo-instagram" />
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/silverrukh/">
                                        <ion-icon name="logo-linkedin" />
                                        Linkedin
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col wide l-3 m-6 c-12">
                            <h5>Góp ý với chúng tôi</h5>
                            <textarea name="feedback" id="feedback" placeholder="Viết góp ý của quý khách tại đây" defaultValue={""} />
                            <button className="send-feedback-btn">Gửi</button>
                        </div>
                    </div>
                </div>
                <h5>@Copyright by SilverRukh</h5>
            </footer>
        );
    }
}

export default Footer;