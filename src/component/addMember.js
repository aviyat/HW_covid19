import React, { useState, useRef } from 'react';
import { createMember } from './service';
import { connect } from 'react-redux';
import { updateMember } from './store/action';
import { addMember } from './store/action';
import Menu from './menu';
import axios from 'axios'


import { withRouter } from 'react-router-dom';
// import member from '../../../WeatherProject/models/member';

function mapStateToProps(state) {
    return { 
        memberState: state.member
    }
}

const mapDispatcToProps = (dispatch) => ({

    updateMember: (member) => dispatch(createMember(member)),

})

export default withRouter(connect(mapStateToProps, mapDispatcToProps)(function AddMember(props) {
    const [url,setUrl]=useState();
    const [memberName,setMemberName]=useState();
    const [id,setId]=useState();
    const [adress,setAdress]=useState();
    const [bornDate,setBornDate]=useState();
    const [phone,setPhone]=useState();
    const [mobilePhone,setMobilePhone]=useState();
    const [DoseDate, setDoseDate] = useState();
    const [producerName, setproducerName] = useState();
    const [datePositiveResult, setdatePositiveResult] = useState();
    const [dateRecovery, setdateRecovery] = useState();
    const {updateMember, memberState } = props
     const { history } = props;


    function AddMember(e) {
        e.preventDefault();
         axios.post('http://localhost:3500/addMember',{
                        url: url,
                        memberName: memberName,
                        id:id,
                        adress:adress,
                        bornDate:bornDate,
                        phone:phone,
                        mobilePhone:mobilePhone,
                        // DoseDate:DoseDate,
                        // producerName:producerName,
                        // datePositiveResult:datePositiveResult,
                        // dateRecovery:dateRecovery,

                       

                    });
                    // history.push("/");
    }
  
    // function addVaccinattion(e) {
    //     e.preventDefault();
    //      axios.post('http://localhost:3500/addVaccinattion',{
    //                     DoseDate: urDoseDatel,
    //                     producerName: producerName,
    //                     datePositiveResult:datePositiveResult,
    //                     dateRecovery:dateRecovery,
                   
    //                 });
    //                 // history.push("/");
    // }

    return (


        <>
            <div>
             <form>
             <div className="field">
                    <label className="label">id</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="id"
                        value={ id }
                        onChange={ (e) => setId(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">memberName</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="memberName"
                        value={ memberName }
                        onChange={ (e) => setMemberName(e.target.value) }
                    />
                </div>
                
                
                <div className="field">
                    <label className="label">adress</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="adress"
                        value={ adress }
                        onChange={ (e) => setAdress(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">born Date</label>
                    <input 
                        className="input"
                        type="Date"
                        placeholder="bornDate"
                        value={ bornDate }
                        onChange={ (e) => setBornDate(e.target.value) }
                    />
                </div>
                  <div className="field">
                    <label className="label">phone</label>
                    <input 
                        className="input"
                        type="Number"
                        placeholder="phone"
                        value={ phone }
                        onChange={ (e) => setPhone(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">mobilePhone</label>
                    <input 
                        className="input"
                        type="Number"
                        placeholder="mobilePhone"
                        value={ mobilePhone }
                        onChange={ (e) => setMobilePhone(e.target.value) }
                    />
                </div>
                {/* <div className="field">
                    <label className="label">DoseDate</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="DoseDate"
                        value={ DoseDate }
                        onChange={ (e) => setDoseDate(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">producerName</label>
                    <label className="label">producerName</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="producerName"
                        value={ producerName }
                        onChange={ (e) => setproducerName(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">datePositiveResult</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="datePositiveResult"
                        value={ datePositiveResult }
                        onChange={ (e) => setdatePositiveResult(e.target.value) }
                    />
                </div>
            
                <div className="field">
                    <label className="label">dateRecovery</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="dateRecovery"
                        value={ dateRecovery }
                        onChange={ (e) => setdateRecovery(e.target.value) }
                    />
                </div> */}
            
            
                <button className="button is-primary">add vaccination details</button>
                <div className="field">
                    <button className="button is-primary" onClick={()=>{AddMember()}}>Save</button>
                    {/* <button className="button is-primary" onClick={()=>{addMember()}}>Save</button> */}

                </div>
            </form>
        </div>
        
        </>
    )
}
)
)