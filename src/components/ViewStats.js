import React from 'react';
import Paper from '@material-ui/core/Paper';
import {complains} from './ComplainData';

export default function UserProfile() {
    return (
        <div>
            <Paper elevation={3} className="userProfile">
                <section className="stats">
                    <div style={{backgroundColor:'rgb(245, 227, 19)'}}>
                        <div>
                            <p className="count">{complains.length}</p>
                            <p>Pending Task</p>
                        </div>
                        <button>Learn More</button>
                    </div>
                    <div style={{backgroundColor:'rgb(229, 66, 86)'}}>
                        <div>
                            <p className="count">{complains.length}</p>
                            <p>Total Task</p>                            
                        </div>
                        <button>Learn More</button>
                    </div>
                    <div style={{backgroundColor:'rgb(36, 214, 125)'}}>
                        <div>
                            <p className="count">0</p>
                            <p>Completed Task</p>
                        </div>
                        <button>Learn More</button>
                    </div>
                </section>
            </Paper>
        </div>
    )
}
