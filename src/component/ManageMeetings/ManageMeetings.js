import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Button, Container, Row, Col } from 'react-bootstrap';
import './ManageMeetings.css';
import Meeting from '../Meeting/meeting';
import SearchPage from '../SearchPage/SearchPage';
import TutorSubjectsAndTimes from '../tutorSubjectsAndTimes/TutorSubjectsAndTimes';


const ManageMeetings = () => {

    const [pastMeetings, setPastMeetings] = useState([]);
    // const [upcomingMeetings, setUpcomingMeetings] = useState([]); // TODO - implement upcoming meetings

    useEffect(() => {
        fetch(`http://localhost:9000/meetings/list?id=${localStorage.token}`).then((response) => response.json()).then(response => {
            setPastMeetings(response.data.pastMeetings);
            // setUpcomingMeetings(response.data.upcomingMeetings); // TODO - implement upcoming meetings
        })
    }, []);

    <h1>ManageMeetings</h1>

    return <div className="container">

        <Container>

            <Row>
                <h1><b>Manage Meetings</b></h1>
            </Row>

            <br></br>

            <Row>
                <Col>
                <Link to="../tutor">
                <Button variant="primary">Add Subjects + Availability</Button>
                </Link>
                </Col>

                <Col></Col>
                
                <Col xs={6}>
                    <Link to="../">
                    <Button variant="primary">Search + Schedule Meetings</Button>{' '}
                    </Link>
                </Col>
            </Row>

            <br></br>

            <Row>
                <Col>
                    <div className="card">
                        <h5 className="card-header"><strong>Completed Meetings</strong></h5>
                        <div className="card-body">
                            {pastMeetings.map(userMeeting => {
                                return (
                                    <div key={userMeeting.meeting.title}>
                                        <h5 className="card-title">{userMeeting.meeting.title}</h5>
                                        <p className="card-text">{`${userMeeting.participant.firstName}  ${userMeeting.participant.lastName}`}</p>
                                        <a href="#" className="btn btn-primary">Download Media</a>
                                    </div>)

                            })}
                        </div>
                    </div>
                </Col>

                <Col>
                    <div className="card">
                        <h5 className="card-header"><strong>Scheduled Meetings</strong></h5>
                        <div className="card-body">
                            <h5 className="card-title">Grade 12 Geometry</h5>
                            <p className="card-text">Prof. Czik</p>
                            <Link to="../meeting">
                            <a href="#" class="btn btn-primary">Join Meeting</a>
                            </Link>
                            &nbsp;&nbsp;&nbsp;
                   <a href="#" className="btn btn-danger">Cancel</a>
                        </div>
                    </div>
                </Col>
            </Row>

        </Container>

    </div>

}

export default ManageMeetings