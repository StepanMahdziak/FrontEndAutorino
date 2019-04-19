
import { IAction } from "./IAction";
export type Middleware<S , IAction> = (state: S, action: IAction) => void;
