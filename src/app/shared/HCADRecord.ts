export class HCADRecord {
  public  AcctNumb:string;
  public  LandSft:number ;
  public  BldgSqft:number ;
  public  Kmap:string;
  public  LUC:string;
  public  Nhbd:string;
  public  YrBuilt:string;
  public  TaxYear:number ;
  public  OwnerName:string;
  public  OwnerAddress:string;
  public  OwnerAddress2:string;
  public  OwnerCitySt:string;
  public  OwnerZip:string;
  public  PropertyDescrip:string;
  public  PropertyDescrip2:string;
  public  Comments:string;
  public  Str_Num_Name:string;
  public  CityState:string;
  public  ZipCode:string;
  public  Facet:string;
  public  CurrLand:number ;
  public  CurrImprovments:number ;
  public  TotalValueAddedUp:number ;
  public  prev_Land_Value:number ;
  public  prev_imp_Value:number ;
  public  Total_Appraised_Value:number ;
  public  FinalValue:number ;
  public  NOTE:string;

  constructor(
      AcctNumb:string,
      LandSft:number ,
      BldgSqft:number ,
      Kmap:string,
      LUC:string,
      Nhbd:string,
      YrBuilt:string,
      TaxYear:number ,
      OwnerName:string,
      OwnerAddress:string,
      OwnerAddress2:string,
      OwnerCitySt:string,
      OwnerZip:string,
      PropertyDescrip:string,
      PropertyDescrip2:string,
      Comments:string,
      Str_Num_Name:string,
      CityState:string,
      ZipCode:string,
      Facet:string,
      CurrLand:number ,
      CurrImprovments:number ,
      TotalValueAddedUp:number ,
      prev_Land_Value:number ,
      prev_imp_Value:number ,
      Total_Appraised_Value:number ,
      FinalValue:number ,
      NOTE:string
  )
  {
        this.AcctNumb = AcctNumb;
        this.LandSft = LandSft;
        this.BldgSqft = BldgSqft;
        this.Kmap =  Kmap;
        this.LUC =   LUC;
        this.Nhbd =  Nhbd;
        this.YrBuilt =  YrBuilt;
        this.TaxYear = TaxYear;
        this.OwnerName =  OwnerName;
        this.OwnerAddress =  OwnerAddress;
        this.OwnerAddress2 =  OwnerAddress2;
        this.OwnerCitySt =  OwnerCitySt;
        this.OwnerZip =  OwnerZip;
        this.PropertyDescrip =  PropertyDescrip;
        this.PropertyDescrip2 =  PropertyDescrip2;
        this.Comments =  Comments;
        this.Str_Num_Name =  Str_Num_Name;
        this.CityState =  CityState;
        this.ZipCode =  ZipCode;
        this.Facet =  Facet;
        this.CurrLand = CurrLand;
        this.CurrImprovments = CurrImprovments;
        this.TotalValueAddedUp = TotalValueAddedUp;
        this.prev_Land_Value = prev_Land_Value;
        this.prev_imp_Value = prev_imp_Value;
        this.Total_Appraised_Value = Total_Appraised_Value;
        this.FinalValue  = FinalValue;
        this.NOTE =  NOTE;
  }

}
