import { BeneficiaryData } from "./beneficiary-data";
import { UserData } from "./user-data";

export interface WillData {

    user: UserData;
    newBeneificiary: true | false;
    complete : true | false;
    beneficiaries:BeneficiaryData[];
    type: string;
    description:string;
    
}
