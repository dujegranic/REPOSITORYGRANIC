import React from 'react';
import {Link} from 'react-router-dom';
import nbapovijest from '../nbapovijest.jpg';
function Povijest() {
    return (
      <div>
          <p>Povijest NBA</p>
       <table>

    <tr>
 
    <td><Link to='/Povijest' >Povijest NBA </Link></td>
          
          <td><Link to='/Najbolji' >Najbolji igrači u povijesti</Link></td>

          <td><Link to='/Danas'>NBA danas</Link></td>

          <td><Link to='/Leaguepass'>League Pass</Link></td>
    
    </tr>
    </table>
     <a href="https://www.youtube.com/watch?v=rvOlvSgxkTk">  <img src = {nbapovijest} className="slika"></img> </a>

        <p>Liga je osnovana 6. lipnja 1946. godine u New York Cityju, New Yorku kao Basketball Association of America (BAA). 1974. se ujedinila sa drugom tadašnjom ligom zvanom ABA. Liga je postala globalna tijekom 90-tih godina prošlog stoljeca za vrijeme dominacije Chicago Bullsima predvođenih Michael Jordanom, najboljim igračem u povijesti košarke. Najuspješnija ekipa u povijesti su Boston Celticsi sa 17 osvojenih prvenstava, a slijede ih Los Angeles Lakersi sa jednim manje. </p>

<Link to="/">Povratak na početnu stranicu</Link>
      </div>
    );
  }
  
  
  export default Povijest;