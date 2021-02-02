"use strict";
var TicketDTO = /** @class */ (function () {
    //constructor 
    function TicketDTO(departure_airport, departure_time, departure_date, arrival_airport, arrival_time, arrival_date) {
        this.departure_airport = departure_airport;
        this.departure_time = departure_time;
        this.departure_date = departure_date;
        this.arrival_airport = arrival_airport;
        this.arrival_time = arrival_time;
        this.arrival_date = arrival_date;
    }
    return TicketDTO;
}());
