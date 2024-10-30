import { WillCondition } from "./will-condition";
import { WillData } from "./will-data";

export interface ConditionalWillData extends WillData{

    conditions:WillCondition[];
}
