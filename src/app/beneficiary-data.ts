import { AddressData } from "./address-data";

export interface BeneficiaryData {
    firstName: string;
    lastName: string;
    middleName: string;
    addressData: AddressData;
    complete: boolean;
}
