class Supplier {
  suppliercode: string;
  name: string;
  address: string;
  tdoi: number;
  sdoi: number;
  flag: string;
  group: string;
  shortname: string;

  constructor(
    suppliercode: string,
    name: string,
    address: string,
    tdoi: number,
    sdoi: number,
    flag: string,
    group: string,
    shortname: string
  ) {
    this.suppliercode = suppliercode;
    this.name = name;
    this.address = address;
    this.tdoi = tdoi;
    this.sdoi = sdoi;
    this.flag = flag;
    this.group = group;
    this.shortname = shortname;
  }

  getName = function () {
    return `${this.name} ${this.address}`;
  };
}
let s = new Supplier(
  "08",
  "BAYER",
  "Jl. Pancoran Barat 4",
  18,
  98,
  "Active",
  "OTHERS",
  "BYR"
);

console.table(s.getName());
