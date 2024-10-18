import React from 'react'

/*Eventorganisatörer BÖR kunna ange ett max antal deltagare, efter det går det ej att
anmäla sig till eventet.*/

/*
Hämta info om eventet, antal deltagare och max deltagare
Ändra max antalet deltagare
uppdatera antalet deltagare
När max uppnnås, uppdatera boolean låst till true



*/ 

// boolean if the event is open for signups 
let EventLocked = false;

// 
let EventLimit = 120 ;

let EventAttendes =0;

export const EventMax=(EventLocked,EventLimit,EventAttendes)=> {
  ({
       EventAttendes,
        EventLocked,
        EventLimit,
    
  })
}

