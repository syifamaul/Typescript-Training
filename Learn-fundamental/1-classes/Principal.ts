import Supplier from "./Supplier";
import PrincipalService from "../../PrincipalService";

export default class Principal implements PrincipalService {
  private message: string;
  private numberOfmessage: number;
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

const p = new Principal();
p.setSignature("Private Signature message!", 694);
console.log(p.getSignature());

let obn = {
  suppliercode: "008",
  name: "PT BAYER INDONESIA",
  address: "Jl. Pengangguran XV",
  sdoi: 98,
  tdoi: 55,
  flag: "ACTIVE",
  group: "Others",
  shortname: "BYR",
};

let objectSupplier = new Supplier(obn);
p.setObj(objectSupplier);

console.log(objectSupplier.toString());
