import Principal from "./Principal";
import Supplier from "./Supplier";

const p = new Principal();
p.setSignature("Private Signature message!", 694);
// console.log(p.getSignature());

let obn = {
  suppliercode: "007",
  name: "PT BA",
  address: "Jl. Pengangguran XV",
  sdoi: 98,
  tdoi: 55,
  flag: "ACTIVE",
  group: "Others",
  shortname: "BYR",
};

let objectSupplier = new Supplier(obn);
p.setObj(objectSupplier);

console.log(p.getObj());
