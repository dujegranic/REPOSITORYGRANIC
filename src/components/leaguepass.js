import React, { Component } from "react";
import {Link} from 'react-router-dom';
import nbapass from '../nbapass.jpg';

export class Leaguepass extends Component{ 
    state={
        ime:'',
        prezime:'',
        kartica:'',



      }
    onSubmit= e =>{e.preventDefault(); console.log("Forma je potvrdena",this.state.ime);}
    render()
        {
         return(
        <div>
          <img src={nbapass} class="slika"></img>
          <p>NBA League Pass je pretplatnička usluga koja dopušta gledanje uživo NBA utakmica sa svih uređaja. Uz uživo utakmice, nudi i puno drugog sadržaja kao što su dokumentarni serijali, stručne analize i arhive starih utakmica</p>
          <h1> Unesi svoje podatke, {this.state.ime} !</h1>
        <form>
          <input placeholder='ime' value={this.state.ime} onChange={e=>this.setState({ime: e.target.value})}/>
          <input placeholder='prezime' value={this.state.prezime} onChange={e=>this.setState({prezime: e.target.value})}/>
          <input placeholder='broj kartice' value={this.state.password} onChange={e=>this.setState({kartica: e.target.value})}/>
        <button> <a href="https://www.youtube.com/watch?v=Dve3tmxyeW0">Potvrdi </a> </button> 
        </form>
        <Link to="/">Povratak na početnu stranicu</Link>
        </div>
      );
         }
}  
  
  
  export default Leaguepass;