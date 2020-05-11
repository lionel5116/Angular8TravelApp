export class TravelDetails{
  /*
    id:number;
    TravelerName: string;
    CountryCode: string;
    City: string
    TravelDate: string
    HotelName : string
    Airline: string
    TicketNumber: string
    BookingCode: string
    TotalCostOfTrip: string
    GirlCost: string
    TripRating: string
    Notes: string
    */

   public   id:number;
   public  TravelerName: string;
   public  CountryCode: string;
   public  City: string
   public  TravelDate: string
   public  HotelName : string
   public  Airline: string
   public   TicketNumber: string
   public  BookingCode: string
   public  TotalCostOfTrip: string
   public  GirlCost: string
   public  TripRating: string
   public  Notes: string

   constructor(
    id:number,
    TravelerName: string,
    CountryCode: string,
    City: string,
    TravelDate: string,
    HotelName : string,
    Airline: string,
    TicketNumber: string,
    BookingCode: string,
    TotalCostOfTrip: string,
    GirlCost: string,
    TripRating: string,
    Notes: string
   )
   {
    this.id = id;
    this.TravelerName = TravelerName;
    this.CountryCode = CountryCode;
    this.City = City;
    this.TravelDate = TravelDate;
    this.HotelName = HotelName;
    this.Airline = Airline;
    this.TicketNumber = TicketNumber;
    this.BookingCode = BookingCode;
    this.TotalCostOfTrip = TotalCostOfTrip;
    this.GirlCost = GirlCost;
    this.TripRating = TripRating;
    this.Notes = Notes;
   }


}
