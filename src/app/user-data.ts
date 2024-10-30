import { AddressData } from "./address-data";

export interface UserData {

    firstName: string;
    lastName: string;
    middleName: string;
    addressData: AddressData;
    complete:boolean;
}
