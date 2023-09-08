class Account{
    constructor(name,accno,balance){
        this.name = name;
        this.accno = accno;
        this.balance = balance;
    }

withdraw(amount){
    if(this.balance < amount){
        return `${this.name} your balance is low :₹${this.balance}`
    } else
    this.balance = this.balance - amount; 
    return this.balance
    }
getbalance(){
    return `${this.name} your balance is ${this.balance}`
    }
deposit(amount){
    this.balance = this.balance + amount; 
    return `${this.name} your balance is :₹${this.balance}`
}
transaction(){
    
}
}
const Ajithacc = new Account("Ajith",87336456325,1_00);
const prithviacc = new Account("prithvi",66564325687,0.00);
const aravindacc = new Account("Aravindh",7643872138271,0.01);
console.log(Ajithacc.withdraw(50000))
console.log(Ajithacc.getbalance())
console.log(Ajithacc.deposit(300))
