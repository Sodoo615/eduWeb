"use client"
import React from 'react';

import style from "./timetable.css"

const timeTable = () => {

  return (
    <div className="main-timeTale">
    
    <main className='child-timeTable'>
      <h1 className="titlesss">Хичээлийн хуваарь</h1>

      <table className="timetable">
        <thead>
          <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>09:00 - 10:00</td>
            <td>Math</td>
            <td>Science</td>
            <td>English</td>
            <td>History</td>
            <td>Geography</td>
            <td>Chess</td>
            <td>Chess</td>
          </tr>
          <tr>
            <td>10:00 - 11:00</td>
            <td>Science</td>
            <td>English</td>
            <td>History</td>
            <td>Geography</td>
            <td>Math</td>
            <td>Geography</td>
            <td>Math</td>
          </tr>
          <tr>
            <td>10:00 - 11:00</td>
            <td>Science</td>
            <td>English</td>
            <td>History</td>
            <td>Geography</td>
            <td>Math</td>
            <td>Geography</td>
            <td>Math</td>
          </tr>
          <tr>
            <td>10:00 - 11:00</td>
            <td>Science</td>
            <td>English</td>
            <td>History</td>
            <td>Geography</td>
            <td>Math</td>
            <td>Geography</td>
            <td>Math</td>
          </tr>
          <tr>
            <td>10:00 - 11:00</td>
            <td>Science</td>
            <td>English</td>
            <td>History</td>
            <td>Geography</td>
            <td>Math</td>
            <td>Geography</td>
            <td>Math</td>
          </tr>
        </tbody>
      </table>
      </main>
      </div>
  );
};


 


export default timeTable;
