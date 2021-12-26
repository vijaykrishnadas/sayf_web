import React from 'react'
import './dashboard.css'
import DashNav from './DashNav'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const Dashboard = () => {
    // const user = useParams();
    return (
        <div className='dashboard'>
            <DashNav/>
            <h1>Welcome to Sayf, Rachit</h1>
        </div>
    )
}

export default Dashboard
