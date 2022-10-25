
import './members.css'
import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react';
import { getAllMembers } from './service';
import { Link } from 'react-router-dom'

import axios from 'axios';

import Menu from './menu';



export default (function MemberList(props) {
  const [allMembers, setAllMembers] = useState([]);
  const [chosenP, setChosenP] = useState();



  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = async () => {
    const response = await axios.get('http://localhost:3500/getAllMembers');
    setAllMembers(response.data);
  }

  const deleteMember = async (id) => {
    await axios.delete(`http://localhost:3500/deleteMember/${id}`);
    // console.log(id)

    getMembers();
  }

  //   const updateMember = async () => {
  //     const response = await axios.get('http://localhost:3500/updateMember');
  //     setAllMembers(response.data);
  // }

  return (
    <>
      <Menu></Menu>

      <h1>Membres Hospital</h1>
      <div className="row w-100 d-flex justify-content-around">

        {


          allMembers.map(item => {
            return (
              <>

                <div className="card col-3" >
                  <img className="card-img-top " src={item.url} alt="Card image cap" />
                  <div className="card-body">
                    <br/>
                    <h5 className="card-text">member Name: {item.memberName}</h5>
                    <p className="card-text">id:{item.id}</p>
                    <button type="button" onClick={() => setChosenP(item)} class="button is-small is-danger" data-toggle="modal" data-target="#exampleModal">
                      member details </button>
                   <br></br>   <br></br>
                    <button onClick={() => deleteMember(item.id)} className="button is-small is-danger">Delete Member</button>

                  </div>
                </div>

              </>)
          })

        }

      </div>
     
      <div class="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="container-fluid">
          {/* <div class="row"> */}
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class=".col-md-6 .col-sm-6 ">
                <div class="modal-header ">

                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
               </div> 
                 <br></br>
                  <h5 class="modal-title" id="exampleModalLabel">{chosenP && chosenP.memberName}</h5>
                
                <div class="modal-body .col-md-6 .col-sm-6 ">
                  <img src={chosenP && chosenP.url} />
                </div>
              </div>

              <div class=".col-md-6 .col-sm-6 ">
                <h6 class="modal-title " id="exampleModalLabel">Member Name:{chosenP && chosenP.memberName}</h6>
                <h6 class="modal-title " id="exampleModalLabel">Id: {chosenP && chosenP.id}</h6>
                <h6 class="modal-title " id="exampleModalLabel">Adress{chosenP && chosenP.adress}</h6>
                <h6 class="modal-title " id="exampleModalLabel">Phone: {chosenP && chosenP.phone}</h6>
                <h6 class="modal-title " id="exampleModalLabel">MobilePhone: {chosenP && chosenP.mobilePhone}</h6>
              </div>
              <div class=".col-md-6 .col-sm-6 ">
                <h6 class="modal-title " id="exampleModalLabel">DoseDate: {chosenP && chosenP.DoseDate}</h6>
                <h6 class="modal-title " id="exampleModalLabel">producerName: {chosenP && chosenP.producerName}</h6>
                <h6 class="modal-title " id="exampleModalLabel">datePositiveResult: {chosenP && chosenP.datePositiveResult}</h6>
                <h6 class="modal-title " id="exampleModalLabel">dateRecovery: {chosenP && chosenP.dateRecovery}</h6>
              </div>
              <Link to={`/edit/${chosenP && chosenP.id}`} className="button is-small is-info">Edit Member</Link>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

    </>
  )

}


)
