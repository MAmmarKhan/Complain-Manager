import React from 'react';
import UserProfile from './UserProfile';
import AllComplains from './AllComplains';
import NewComplainContainer from './NewComplainContainer';
import ViewStats from './ViewStats';

export default function ContainersCondition(props) {
    const containerNumber = props.value;
    console.log(containerNumber);
    switch (containerNumber) {
        case 0:
            return (<NewComplainContainer></NewComplainContainer>);
        case 1:
            return (<AllComplains></AllComplains>);
        case 2:
            return (<ViewStats></ViewStats>);
        case 3:
            return (<UserProfile></UserProfile>);
        default:
            return (<div></div>);
    }
    
}