import React from 'react';
import {Link} from 'react-router-dom';
import NBA from '../nba.jpg';

function Pocetna() {
    return (
      <div>

      <table>

      <tr>
       
          <td><Link to='/Povijest' >Povijest NBA </Link></td>
          
          <td><Link to='/Najbolji' >Najbolji igrači u povijesti</Link></td>

          <td><Link to='/Danas'>NBA danas</Link></td>

          <td><Link to='/Leaguepass'>League Pass</Link></td>
          
          </tr>
          </table>
          <a href="https://en.wikipedia.org/wiki/NBA"><img src = {NBA} className="slika"></img></a><br></br>
      </div>
    );
  }
  
  
  export default Pocetna;
