class TicketDTO { 
    //field   
    private departure_airport :string;
    private arrival_airport :string;
    private departure_date:Date;
    private arrival_date:Date; 
    private departure_time:string;
    private arrival_time:string; 
  
    //constructor 
    constructor(departure_airport:string,departure_time:string,departure_date:Date,arrival_airport:string,arrival_time:string,arrival_date:Date) { 
       this.departure_airport = departure_airport; 
       this.departure_time = departure_time;
       this.departure_date = departure_date;
       
       this.arrival_airport = arrival_airport; 
       this.arrival_time = arrival_time;
       this.arrival_date = arrival_date;
       
    } 
 }