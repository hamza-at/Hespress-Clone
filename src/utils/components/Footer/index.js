import React from "react";
import Brand from '../../../assets/images/hespresss.svg';
   // import Contact from '../Contact/index';
    //import {useTranslation} from 'react-i18next';
  import {NavLink} from 'react-router-dom';
    import './styles.css';
    //import {getMenuLink} from '../../helpers';
    import {useEffect, useState} from 'react';
import sandwich from "../../../assets/images/sandwich.svg";
   // import FetchAPIData from './API';
   // import {newsletter} from '../../endpoints';
    //import CustomModal from '../_UI/Modal';

    const Footer = () => {
        const [MenuLinks, setMenuLinks] = useState([]);
        const [inputEmail, setInputEmail] = useState('');
        const [contentMessage, setContentMessage] = useState('');
        const [show, setShow] = useState(false);
        const [sendSuccess, setsendSuccess] = useState(null);
        const [isLoading, setIsLoading] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        //const urlSubscribe = newsletter();
        //const {t} = useTranslation();

        return (
            <footer className="text-center text-lg-start bg-light text-muted"  >

                <section
                    className="d-flex w-100 justify-content-center justify-content-lg-between p-4 border-bottom" style={{backgroundColor:"#4d5a85"}}>
                    <section className="container-fluid dark region-12 grid-section text-white" >
                        <div className="container-fluid">
                            <div className="row box-after-footer">
                                <div className="col newsletter-box">
                                    <h3>النشرة الإخبارية</h3>
                                    <p className="description">
                                        اشترك الآن في النشرة البريدية لجريدة هسبريس، لتصلك آخر الأخبار يوميا </p>
                                    <div className="row input-group">
                                        <input type="text" id="subscribe-email" className="form-control  col-12 col-lg-9"
                                               placeholder="عنوان البريد الإلكتروني" aria-label="Recipient's username"
                                               aria-describedby="subscribe"/>
                                            <div className="input-group-append d-inline col-12 col-lg-3">
                                                <button className="btn btn-outline-secondary col-12" type="button"
                                                        id="subscribe">اشترك
                                                </button>
                                            </div>
                                            <div hidden="" className="error check-email">يرجى التحقق من البريد
                                                الإلكتروني
                                            </div>
                                            <div hidden="" className="success">لإتمام عملية الاشتراك .. اتبع الخطوات
                                                المذكورة في البريد الإلكتروني لتأكيد الاشتراك.
                                            </div>
                                            <div hidden="" className="error invalid-email">لا يمكن إضافة هذا البريد
                                                الإلكتروني إلى هذه القائمة. الرجاء إدخال عنوان بريد إلكتروني
                                                مختلف.</div>
                                    </div>
                                </div>
                                <section id="text-3" className="lsa-widget after-footer col-12 col-md-6 widget_text">
                                    <div className="textwidget">
                                        <div className="col download-section">
                                            <div className="row">
                                                <div className="app-details col-12">
                                                    <h3>&#x202B;حمل تطبيق هسبريس</h3>
                                                    <p className="description">
                                                        ولا تنسى تفعيل الإشعارات للتوصل بآخر المستجدات! </p>
                                                    <div className="download-stores">
                                                        <a href="https://appgallery.huawei.com/#/app/C101425465"
                                                           className="app-gallery-store store-badge"
                                                           rel="noopener nofollow" target="_blank">
                                                        </a>
                                                        <a href="https://apps.apple.com/fr/app/hespress/id840082440"
                                                           className="app-store store-badge" rel="noopener nofollow"
                                                           target="_blank">
                                                        </a>
                                                        <a href="https://play.google.com/store/apps/details?id=com.hespress.android"
                                                           className="play-store store-badge" rel="noopener nofollow"
                                                           target="_blank">
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </section>

                </section>
<div > <div style={{backgroundColor:"#1e22b4"}} >
                <section className="text-white" >
                    <div className="container-fluid text-center text-md-start mt-5 " >

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 m-5">


                                    <img src={Brand} className="img-fluid  " alt="Logo" width="2100" height="500"/>
                                <div className="me-5 d-none d-lg-block">
                                    <span>Get connected with us on social networks:</span>
                                </div>

                                <div>
                                    <a href="" className="me-4 text-reset">
                                        <i className="fab fa-facebook-f"/>
                                    </a>
                                    <a href="" className="me-4 text-reset">
                                        <i className="fab fa-twitter"/>
                                    </a>
                                    <a href="" className="me-4 text-reset">
                                        <i className="fab fa-google"/>
                                    </a>
                                    <a href="" className="me-4 text-reset">
                                        <i className="fab fa-instagram "/>
                                    </a>
                                    <a href="" className="me-4 text-reset">
                                        <i className="fab fa-linkedin"/>
                                    </a>
                                    <a href="" className="me-4 text-reset">
                                        <i className="fab fa-github"/>
                                    </a>
                                </div>

                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h4 className="text-uppercase fw-bold mb-4">
                                     هسبريس
                                </h4>
                                <p>
                                    <a href="https://www.hespress.com/publier" className="text-reset">للنشر في هسبريس</a>
                                </p>
                                <p>
                                    <a href="https://www.hespress.com/contact" className="text-reset">اتصل بنا</a>
                                </p>
                                <p>
                                    <a href="https://www.hespress.com/advertising-on-hespress" className="text-reset">للإشهار</a>
                                </p>
                                <p>
                                    <a href="https://www.hespress.com/conditions"  className="text-reset">شروط الاستخدام</a>                                </p>
                                <p>
                                    <a href="https://www.hespress.com/team"  className="text-reset">فريق العمل</a>
                                </p>
                                <p>
                                    <a href="https://www.hespress.com/blogs"className="text-reset">مدونات</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h4 className="text-uppercase fw-bold mb-4">
                                    الأقسام                                </h4>
                               <p><a href="https://www.hespress.com/politique" className="text-reset">سياسة</a></p>
                                <p><a href="https://www.hespress.com/regions" className="text-reset">جهات</a></p>
                                <p><a href="https://www.hespress.com/societe" className="text-reset">مجتمع</a></p>
                                <p><a href="https://www.hespress.com/economie" className="text-reset">اقتصاد</a></p>
                                <p><a href="https://www.hespress.com/medias" className="text-reset">السلطة الرابعة</a>
                                </p>
                                <p><a href="https://www.hespress.com/interviews" className="text-reset">حوارات</a></p>
                                <p ><a href="https://www.hespress.com/faits-divers" className="text-reset">حوادث</a></p>
                                <p ><a href="https://www.hespress.com/art-et-culture" className="text-reset">فن
                                    وثقافة</a></p>
                                <p><a href="https://www.hespress.com/tamazight" className="text-reset">تمازيغت</a></p>
                                <p><a href="https://www.hespress.com/sport" className="text-reset">هسبريس الرياضية</a>
                                </p>
                                <p><a href="https://www.hespress.com/sawt-soura" className="text-reset">صوت وصورة</a>
                                </p>
                                <p><a href="https://www.hespress.com/international" className="text-reset">خارج
                                    الحدود</a></p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fas fa-home me-3"/> New York, NY 10012, US</p>
                                <p>
                                    <i className="fas fa-envelope me-3"/>
                                    info@example.com
                                </p>
                                <p><i className="fas fa-phone me-3"/> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"/> + 01 234 567 89</p>
                            </div>

                        </div>

                    </div>
                </section>
</div>

                <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">جميع الحقوق محفوظة لموقع هسبريس 2022 ©</a>
                </div>
                </div>
            </footer>
        );
    };


    export default Footer;