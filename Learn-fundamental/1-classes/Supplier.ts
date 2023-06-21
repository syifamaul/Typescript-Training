export default class Supplier {
  suppliercode: string;
  name: string;
  address: string;
  tdoi: number;
  sdoi: number;
  flag: string;
  group: string;
  shortname: string;
  objSupplier: any;

  constructor(objSupplier: any) {
    this.objSupplier = objSupplier;
    this.suppliercode = this.objSupplier.suppliercode;
    this.name = this.objSupplier.name;
    this.address = this.objSupplier.address;
    this.tdoi = this.objSupplier.tdoi;
    this.sdoi = this.objSupplier.sdoi;
    this.group = this.objSupplier.group;
    this.flag = this.objSupplier.flag;
    this.shortname = this.objSupplier.shortname;
  }

  getName = () => {
    return this.name;
  };

  toString = () => {
    return this.objSupplier;
  };
}
