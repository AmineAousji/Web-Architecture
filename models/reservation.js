class Reservation{
    constructor(destination, nbrPlaces, assurance){
        this.destination = destination;
        this.nbrPlaces = nbrPlaces;
        this.assurance = assurance;
        
    }
    
    Prix (){
        if (this.assurance == "on"){
            return 20 + this.nbrPlaces * 45;
        }
        else{
            return this.nbrPlaces * 45;
        };
    }
    
};

module.exports = Reservation;