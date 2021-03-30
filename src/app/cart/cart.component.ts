import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fun(){
    alert("PAYMENT DONE, Thank you for visiting");
  }
   res() {
    var c1 = parseInt(localStorage.getItem("c1"));
    document.getElementById("q1").innerHTML = JSON.stringify(c1);
    document.getElementById("iv").innerHTML = JSON.stringify(c1*699);
    
    var c2 = parseInt(localStorage.getItem("c2"));
    document.getElementById("q2").innerHTML = JSON.stringify(c2);
    document.getElementById("if").innerHTML = JSON.stringify(c2*735);

    var c3 = parseInt(localStorage.getItem("c3"));
    document.getElementById("q3").innerHTML = JSON.stringify(c3);
    document.getElementById("is").innerHTML = JSON.stringify((c3*399));

    var c4 = parseInt(localStorage.getItem("c4"));
    document.getElementById("q4").innerHTML = JSON.stringify(c4);
    document.getElementById("ib").innerHTML = JSON.stringify(c4*245);

    document.getElementById("t").innerHTML = JSON.stringify(c1*699+c2*735+c4*245+c3*399);
    //document.getElementById("t5").innerHTML = v1+v2+v3+v;
}
}
