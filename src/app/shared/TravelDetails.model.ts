export class TravelDetails {
  constructor(
             public id : number,
             public TravelerName:string,
             public CountryCode:string,
             public City:string,
             public TravelDate:string,
             public HotelName:string,
             public Airline:string,
             public TicketNumber:string,
             public BookingCode:string,
             public TotalCostOfTrip,
             public GirlCost : number,
             public TripRating : number,
             public Notes:string,
             public FlightCost : number,
             public HotelCost : number,
             public Status:string

             ){}
}
