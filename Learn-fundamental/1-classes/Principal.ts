import Supplier from "./Supplier";
import PrincipalService from "./PrincipalService";

export default class Principal implements PrincipalService {
  private message: string = "";
  private numberOfmessage: number = 0;
  private objSupplier: Supplier;

  //example implement method nobody from interface principalservice
  setSignature(message: string, numberOfmessage: number) {
    this.numberOfmessage = numberOfmessage;
    this.message = ` ${message} counter by ${this.numberOfmessage} `;
  }
  // method overloading
  getSignature = () => {
    return this.message;
  };

  setObj(objSupplier: Supplier) {
    this.objSupplier = objSupplier;
  }

  getObj = () => {
    return this.objSupplier;
  };
}
