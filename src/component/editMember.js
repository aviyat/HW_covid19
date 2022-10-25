
import React, { useState, useRef, useEffect } from 'react';
import { createMember } from './service';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux';
import { updateMember } from './store/action';
import { addMember } from './store/action';
import Menu from './menu';


// import member from '../../../WeatherProject/models/member';

// function mapStateToProps(state) {
//     return { 
//         memberState: state.member
//     }
// }

// const mapDispatcToProps = (dispatch) => ({

//     updateMember: (member) => dispatch(createMember(member)),

// })

// const history = useHistory();

//withRouter( connect(mapStateToProps, mapDispatcToProps)
export default function EditMember(props) {
    const [url, setUrl] = useState();
    const [memberName, setMemberName] = useState("chaim");
    const [adress, setAdress] = useState();
    const [bornDate, setBornDate] = useState();
    const [phone, setPhone] = useState();
    const [mobilePhone, setMobilePhone] = useState();
    const [DoseDate, setDoseDate] = useState();
    const [producerName, setproducerName] = useState();
    const [datePositiveResult, setdatePositiveResult] = useState();
    const [dateRecovery, setdateRecovery] = useState();
    const [memberHistory, setMemberHistory] = useState();

    // const { updateMember, memberState } = props
    const { history } = props;
    const { id } = useParams();



    function updateMember(e) {
        e.preventDefault();
        axios.patch(`http://localhost:3500/updateMember/${id}`, {

            url: url,
            memberName: memberName,
            adress: adress,
            bornDate: bornDate,
            phone: phone,
            mobilePhone: mobilePhone,
            DoseDate: DoseDate,
            producerName: producerName,
            datePositiveResult: datePositiveResult,
            dateRecovery: dateRecovery
        });
        history.push("/");
    }
    useEffect(() => {
        getMemberById();
    }, []);

    async function getMemberById() {
        const { data } = await axios.get(`http://localhost:3500/getMemberById/${id}`);
        // console.log("res",res);
        setUrl(() => (data.myMember?.url) ? data.myMember.url : "");
        setMemberName(data.myMember.memberName);
        setAdress(data.myMember.adress)
        setBornDate(data.myMember.bornDate)
        setPhone(data.myMember.setPhone)
        setMobilePhone(data.myMember.MobilePhone)
        // setDoseDate(data.myMember.DoseDate)
        // setproducerName(data.myMember.producerName)
        // setdatePositiveResult(data.myMember.datePositiveResult)
        // setMobilePhone(data.myMember.setMobilePhone)
        setMemberHistory(data.history);
    }





    return (
        <>
            


            <div>
                <form onSubmit={updateMember}>
                    <div className="field">
                        <label className="label">url</label>
                        <input
                            className="input"
                            type="text"
                            placeholder="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>

                    <div className="field">
                        <label className="label">member Name</label>
                        <input
                            className="input"
                            type="text"
                            placeholder="memberName"
                            value={memberName}
                            onChange={(e) => setMemberName(e.target.value)}
                        />
                    </div>

                    <div className="field">
                        <button className="button is-primary">Update</button>
                    </div>
                </form>
            </div>
        </>   
        )
          }
// {/* 
         



                // <form>
                //     <div class="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                //         <div class="container-fluid">
                //             <div class="modal-dialog" role="document">
                //                 <div class="modal-content">
                //                     <div class=".col-md-6 .col-sm-6 ">
                //                         <div class="modal-header ">

                //                             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                //                                 <span aria-hidden="true">&times;</span>
                //                             </button>
                //                         </div>
                //                         <br></br>
                //                         <label className="label">url</label>
                //                         <input className="input" type="text" placeholder="memberName" value={memberName} onChange={(e) => setMemberName(e.target.value)} />
                //                         <input className="input" type="text" placeholder="bornDate" value={bornDate} onChange={(e) => setBornDate(e.target.value)} />
                //                         <input className="input" type="text" placeholder="url" value={url} onChange={(e) => setUrl(e.target.value)} />
                //                         <input className="input" type="text" placeholder="adress" value={adress} onChange={(e) => setAdress(e.target.value)} />
                //                         <input className="input" type="text" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                //                         <input className="input" type="text" placeholder="mobilePhone" value={mobilePhone} onChange={(e) => setMobilePhone(e.target.value)} />


                //                     </div>

                //                 </div>
                //             </div>
                //         </div>
                        
                //     <div className="field">
                //         <button className="button is-primary" onClick={updateMember}>Update</button>

                //     </div>

                //     </div>

                   


                // </form > */}
                
            