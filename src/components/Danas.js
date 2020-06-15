import React from 'react';
import {Link} from 'react-router-dom';
import tudej from '../tudej.jpg';
function Danas() {
    return (
      <div>
          <p>NBA Danas</p>
       <table>

    <tr>
 
    <td><Link to='/Povijest' >Povijest NBA </Link></td>
          
          <td><Link to='/Najbolji' >Najbolji igrači u povijesti</Link></td>

          <td><Link to='/Danas'>NBA danas</Link></td>

          <td><Link to='/Leaguepass'>League Pass</Link></td>
    
    </tr>
    </table>
     <a href="https://www.youtube.com/watch?v=mjjksztJKbw">  <img src = {tudej} className="slika"></img> </a>
     <p>NBA danas se puno promijenio u odnosu na NBA u dvadesetom stoljeću. Veći je taktički fokus na šutiranju trica i brzini igrača, nego na šutevima iz neposredne udaljenosti i veličini igrača. Neki od najboljih igrača danas su trenutni osvajač nagrade za najboljeg igrača lige Giannis Antetokounmpo, uvijek prisutni LeBron James i Stephen Curry, te mlade senzacije kao što su Slovenac Luka Dončić i Zion Williamson. </p>



<Link to="/">Povratak na početnu stranicu</Link>
      </div>
    );
  }
  
  
export default Danas;