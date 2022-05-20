import React from 'react';
import './styles.css';
import Card from "../../utils/components/Card";
import {Grid} from "@mui/material";
import {DataDivers} from "./Data";

const Faitsdivers =(props) => {
    function FormRow(image, title, date) {
        return (


                    <Card src={image} title={title} date={date}/>

        );
    }


    return (<div className="container main-content">
            <h3 className="title1 text-decoration-underline" >حوادث</h3>
            <div className="row" id="listing">
                <div className="col-12 col-md-7 col-lg-8 col-xl-9">
                    <Grid container spacing={1}>
                        <Grid container item spacing={3}>
                            <React.Fragment>
                        {DataDivers.map((item,index)=> {
                            return <Grid item xs={4}>

                                {FormRow(item.image,item.title,item.date)}
                                </Grid>


                        })}
                            </React.Fragment>

                        </Grid>
                    </Grid>

                </div>
                <div className="col-12 col-md-5 col-lg-4 col-xl-3 side sticky-single">

                    <ul className="wpp-list">
                        <div className="badge bg-warning text-wrap hot" style={{width: "10rem",height:"2rem"}}>

                            الأكثر قراءة</div>

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
            </div>

        </div>
    );
}
export default Faitsdivers;