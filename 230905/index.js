import ColaGenerator from "./js/colaGenerator.js";
import VendingMachineFunc from "./js/vendingMachineFunc.js";

const colaGenerator = new ColaGenerator();
// console.log(await colaGenerator.loadData());
// console.log();
await colaGenerator.setup();

const vendingMachine = new VendingMachineFunc();
vendingMachine.setup();

