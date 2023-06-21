export default class Supplier {
  private suppliercode: string;
  private name: string;
  private address: string;
  private tdoi: number;
  private sdoi: number;
  private flag: string;
  private group: string;
  private shortname: string;
  private objSupplier: any;

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
