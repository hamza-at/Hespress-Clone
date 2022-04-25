
import React, {useState} from "react";
import exit from '../../../../assets/images/close.svg';

export default ({close}) => (
        <div className="menu ">
            <div className="sticky">
                <img src={exit} alt={"exitSidebar"} onClick={close}/>

                <h4 className="follow-us-title">
                    تابعنا على :
                </h4>

                <div className=" social-nav  ">
                    <a href="https://www.twitter.com/Hespress/" className="twitter-icon" rel="noopener" target="_blank"
                       onClick={close}> twitter</a>
                    <a href=" https://bit.ly/2nSBfHS" className="youtube-icon" rel="noopener" target="_blank"
                       onClick={close}> ytb</a>
                    <a href="https://www.instagram.com/hespress/" className="instagram-icon" rel="noopener"
                       target="_blank" onClick={close}> ig</a>
                    <a href="https://www.facebook.com/Hespress/" className="facebook-icon" rel="noopener"
                       target="_blank" onClick={close}> fb</a>
                </div>
            </div>
            <div >
            <ul>


                <li onClick={close} className="menu-item text-end">جميع الأخبار</li>
                <li onClick={close} className="menu-item text-end">الأخبار الرئيسية</li>
                <li onClick={close} className="menu-item text-end">فيروس كورونا في المغرب</li>
                <li onClick={close} className="menu-item text-end">برامج رمضان</li>
                <h3 className="menu-item-h3 text-end">الأقسام</h3>
                <hr/>
                <li onClick={close} className="menu-item text-end">صوت وصورة</li>
                <li onClick={close} className="menu-item text-end">رياضة</li>
                <li onClick={close} className="menu-item text-end">منوعات</li>
                <li onClick={close} className="menu-item text-end">حوادث</li>
                <li onClick={close} className="menu-item  text-end">24 ساعة</li>
                <li onClick={close} className="menu-item text-end">سياسة</li>
                <li onClick={close} className="menu-item text-end">مجتمع</li>
                <li onClick={close} className="menu-item text-end">جهات</li>
                <li onClick={close} className="menu-item text-end">اقتصاد</li>
                <li onClick={close} className="menu-item text-end">سيارات</li>
                <li onClick={close} className="menu-item text-end">مغاربة العالم</li>
                <li onClick={close} className="menu-item text-end">السلطة الرابعة</li>
                <li onClick={close} className="menu-item text-end">فن وثقافة</li>
                <li onClick={close} className="menu-item text-end">تمازيغت</li>
                <li onClick={close} className="menu-item text-end">كُتّاب وآراء</li>
                <li onClick={close} className="menu-item text-end">خارج الحدود</li>
                <li onClick={close} className="menu-item text-end">كاريكاتير اليوم</li>
                <li onClick={close} className="menu-item text-end">حوارات</li>


            </ul>
            </div>
        </div>
);
