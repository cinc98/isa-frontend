import React, { Component } from 'react';
import _ from 'loadsh';

var weekday=new Array(7);
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";
weekday[0]="Sunday";

class WorkingHours extends Component {

  
    renderWorkignHours = workingHours => {
        
        return _.map(workingHours, workingHour => {
            return(
                <tr key = {workingHour.id}><td>{weekday[workingHour.day]}</td><td></td><td>{workingHour.from}</td><td> - </td><td>{workingHour.to}</td></tr>
            )
        })
    }

    render() {
        
        return (
            <div>
                <table>
                    <tbody>
                    {this.renderWorkignHours(this.props.workingHours)}

                    </tbody>
                </table>
            </div>
        );
    }
}

export default WorkingHours;