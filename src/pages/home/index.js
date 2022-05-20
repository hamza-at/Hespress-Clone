import React, {useState} from 'react';
import './styles.css';
import Scroller from '../../utils/components/Scroll';
import {DataHot, DataMain} from "./data";

const Home =(props) => {

   function hot(time,date,title){
      return (
           <div className="col ">
               <div className="card">
                   <div className="card-body">
                       <div className="float-right text-muted">{date} - {time}
                       </div>
                       <h5 className="card-title ">{title}</h5>

                   </div>
               </div><hr/>

           </div>
      );
   }




    return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <section className="DroiteSec text-right ">
                            <h5 className="title text-center ">24 ساعة
                            </h5>
                            <Scroller>
                           <div className="container-fluid">

                                <div className="container py-2 mt-4 mb-4">
                                    {DataHot.map((item,index)=>{
                                        return(<div className="row">
                                            <div className="col-auto text-center  flex-column d-none d-sm-flex TextD">
                                                <div className="row h-50">
                                                    <div className="col">&nbsp;</div>
                                                    <div className="col">&nbsp;</div>
                                                </div>
                                                <h5 className="m-2">
                                                    <span className="badge badge-pill bg-light rounded-circle">&nbsp;</span>
                                                </h5>
                                                <div className="row h-50">
                                                    <div className="col border-right">&nbsp;</div>
                                                    <div className="col">&nbsp;</div>
                                                </div>
                                            </div>

                                            { hot(item.time,item.date,item.title)}

                                        </div>);
                                     })}


                                    </div>



                            </div>
                            </Scroller>
                        </section>
                    </div>
                    <div className="col-6">
                        <section className="MilieuSec ">
                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div
                            id="carouselExampleIndicators"
                            className="carousel slide"
                            data-bs-ride="carousel"
                            >
                            <div className="carousel-indicators">
                                {DataMain.map((eachFile, index) => {
                                    return (
                                        <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to={index}
                                            className="active"
                                            aria-current="true"
                                            aria-label={`Slide ${index + 1}`}
                                        ></button>
                                    );
                                })}
                            </div>

                            <div className="carousel-inner">
                                {DataMain.map((eachFile, index) => {
                                    return (
                                        <div
                                            className={
                                                index === 0
                                                    ? "carousel-item active"
                                                    : "carousel-item "
                                            }
                                            key={index}
                                        >
                                            <img src={eachFile.image} className="d-block img-fluid  w-100 " style={{
                                                    height: "600px",
                                                    width: "450px",
                                                    objectFit: "cover",
                                                }} alt="..."/>
                                            <div className="carousel-caption d-none d-md-block titlemilieu text-white">
                                                <h5>{eachFile.title}</h5>
                                                <p>{eachFile.content}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev"
                            >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next"
                            >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        </div>
                    </section>
                    </div>
                    <div className="col-2"> <section className="GaucheSec   ">
                        <h5 className="title text-center text">الأكثر مشاهدة</h5>
                        <div className="container-fluid">
                            <ul className="wpp-list">


                                <li><a
                                    href="https://www.hespress.com/%d8%ad%d8%b3%d8%a7%d8%a8%d8%a7%d8%aa-%d9%81%d9%84%d9%83%d9%8a%d8%a9-%d8%aa%d8%aa%d9%88%d9%82%d8%b9-%d8%b9%d9%8a%d8%af-%d8%a7%d9%84%d9%81%d8%b7%d8%b1-%d9%81%d9%8a-%d8%a7%d9%84%d9%85%d8%ba%d8%b1%d8%a8-978250.html"
                                    className="wpp-post-title " target="_self">هذه توقعات حسابات فلكية ليوم حلول عيد الفطر السعيد
                                    في المغرب</a> </li><hr/>
                                <li><a
                                    href="https://www.hespress.com/%d8%b9%d8%b1%d8%b6-%d8%a7%d9%84%d8%ad%d9%83%d9%88%d9%85%d8%a9-%d8%a7%d9%84%d8%b2%d9%8a%d8%a7%d8%af%d8%a9-%d9%81%d9%8a-%d8%a3%d8%ac%d9%88%d8%b1-%d8%a7%d9%84%d9%82%d8%b7%d8%a7%d8%b9-%d8%a7%d9%84%d8%ae-980361.html"
                                    className="wpp-post-title" target="_self">عرض الحكومة.. الزيادة في أجور القطاع الخاص وتخفيض
                                    الضريبة على الدخل</a></li><hr/>
                                <li><a
                                    href="https://www.hespress.com/%d8%a7%d9%84%d9%86%d9%8a%d8%a7%d8%a8%d8%a9-%d8%a7%d9%84%d8%b9%d8%a7%d9%85%d8%a9-%d8%aa%d8%aa%d8%a7%d8%a8%d8%b9-%d8%a3%d8%b4%d9%87%d8%b1-%d8%b7%d8%a8%d9%8a%d8%a8-%d9%84%d9%84%d8%aa%d8%ac%d9%85%d9%8a-968435.html"
                                    className="wpp-post-title" target="_self">النيابة العامة تتابع أشهر طبيب للتجميل وزوجته
                                    بالاتجار بالبشر</a> </li><hr/>
                                <li><a
                                    href="https://www.hespress.com/%d8%b1%d8%b3%d9%85%d9%8a%d8%a7-%d9%87%d8%b0%d9%87-%d8%aa%d9%81%d8%a7%d8%b5%d9%8a%d9%84-%d8%a7%d9%84%d8%a7%d8%aa%d9%81%d8%a7%d9%82-%d8%a7%d9%84%d8%a7%d8%ac%d8%aa%d9%85%d8%a7%d8%b9%d9%8a-%d8%a8%d9%8a-981511.html"
                                    title="رسميا .. هذه تفاصيل الاتفاق الاجتماعي بين الحكومة والنقابات و&quot;الباطرونا&quot;"
                                    className="wpp-post-title" target="_self">رسميا .. هذه تفاصيل الاتفاق الاجتماعي بين الحكومة
                                    والنقابات و"الباطرونا"</a> </li><hr/>
                                <li><a
                                    href="https://www.hespress.com/%d9%87%d8%b0%d9%87-%d8%aa%d9%81%d8%a7%d8%b5%d9%8a%d9%84-%d9%85%d8%af%d8%a7%d9%87%d9%85%d8%a9-%d9%85%d9%82%d9%87%d9%89-%d9%88%d9%83%d9%91%d8%a7%d9%84%d9%8a%d9%86-%d8%b1%d9%85%d8%b6%d8%a7%d9%86-980103.html"
                                    title="هذه تفاصيل مداهمة مقهى &quot;وكّالين رمضان&quot; في مدينة الدار البيضاء"
                                    className="wpp-post-title" target="_self">هذه تفاصيل مداهمة مقهى "وكّالين رمضان" في مدينة
                                    الدار البيضاء</a> </li>
                            </ul>
                        </div>
                    </section>
                    </div>

                </div>
            </div>


    );
}
export default Home;