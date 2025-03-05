let number = parseInt(prompt("nhap so nguyen to"));
let fibonacci="";
if(Number.isInteger(number) && number > 0){
    let fib0 = 1;
    let fib1 = 1;
    fibonacci+=fib0;
    if(number>1){
        fibonacci+=" " + fib1;
    }
    for(i=2; i<number; i++){
        let fib2=fib0+fib1;
        fib0=fib1;
        fib1=fib2;
        fibonacci+=" "+fib2;
    }
    document.write("fibonacci: " + fibonacci);
} else{
    document.write("nhap so nguyen dương");
}