import React from 'react';
import {Link} from 'react-router-dom';
import igraci from '../igraci.jpg';
function Najbolji() {
    return (
      <div>
          <p>Najbolji igrači u povijesti</p>
          <table>

        <tr>
 
        <td><Link to='/Povijest' >Povijest NBA </Link></td>
          
          <td><Link to='/Najbolji' >Najbolji igrači u povijesti</Link></td>

          <td><Link to='/Danas'>NBA danas</Link></td>

          <td><Link to='/Leaguepass'>League Pass</Link></td>
    </tr>
    </table>
       
     <a href="https://www.youtube.com/watch?v=R9myAxocCZA">  <img src = {igraci} className="slika"></img> </a>

        <p>Svi najbolji košarkaši u povijesti igrali su u NBA. Neki od najboljih su Michael Jordan koji je osvojio 6 NBA prvenstava dok je 5 puta proglašen najboljim igračem lige, Kobe Bryant sa 5 titula i usto je jedan od najboljih strijelaca u povijesti košarke. NBA je imao svakakve tipove igrače, bilo to vrsni skok-šuteri kao što su Stephen Curry i Klay Thompson, ili dominatni visoki centri kao što su Shaquille O'Neal i Kareem Abdul-Jabbar ili ipak brzi, atletični krilni igrači kao što su LeBron James i Vince Carter.</p>

<Link to="/">Povratak na početnu stranicu</Link>
      </div>
    );
  }
  
  
  export default Najbolji;