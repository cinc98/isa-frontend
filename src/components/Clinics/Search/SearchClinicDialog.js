import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'loadsh';
import { MDBCard, MDBListGroup, MDBListGroupItem  } from "mdbreact";
import { searchClinics, clinicClick } from '../../../actions/clinic';
import { fetchUsersLoction } from '../../../actions/location';
import GoogleMapUpdater from './GoogleMapUpdater';
import ClinicDetail from './ClinicDetail';

class SearchClinicDialog extends Component {

    componentWillMount(){
        this.props.searchClinics();
        this.props.fetchUsersLoction();
    }

    onClinicClickHandle = clinic => {
        this.props.clinicClick(clinic);
    }

    renderClinics(clinics){
        return _.map(clinics, clinic => {
            return(
                <MDBListGroupItem hover href="#"
                    key = {clinic.id}
                    onClick = {() => this.onClinicClickHandle(clinic)}
                >
                    <div className="d-flex w-100 justify-content-between">
                        <h1 className="mb-1">{clinic.name}</h1>
                        <small className="text-muted">3 km away</small>
                    </div>
                    <p className="mb-1">{clinic.description}</p>
                    <small className="text-muted">
                        {clinic.address}
                    </small>
                </MDBListGroupItem>
            )
        })
    }

    render() {
        return (
            <div className = 'container'>
                <div className = 'row'>
                    <div class="col-xl-8">
                        {
                            this.props.clinics !== null && this.props.clinics.selectedClinic !==  undefined ? 
                             <ClinicDetail clinic = {this.props.clinics.selectedClinic} />
                            :
                            <MDBCard>
                                <MDBListGroup style={{ width: "100%" }}>
                                    { this.props.clinics === null ? '' :  this.renderClinics(this.props.clinics.all)}
                                </MDBListGroup>   
                            </MDBCard>    
                        }                
                    </div>
                    <div class="col-xl-4">
                        <MDBCard style={{ width: "400px", height: "400px" }}>
                            { this.props.clinics === null ? ' ' : <GoogleMapUpdater />}
                        </MDBCard> 
                            
                    </div>
                            
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        clinics: state.clinics
    }
}

export default connect(mapStateToProps, { searchClinics, fetchUsersLoction, clinicClick })(SearchClinicDialog);