export interface ServiceItem {
  nameservice: string;
  namespecific: string;
}

export interface Destination {
  name: string;
  lastname: string;
  emailcustomer: string;
  services: ServiceItem[];
}

export interface Company{
  namecompany: string,
  phonenumber: string,
  message:string,
  destination:Destination[];
}
