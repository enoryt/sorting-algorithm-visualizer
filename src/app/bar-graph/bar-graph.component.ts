import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {

  arr = [];
  height = 200


  constructor() { }

  async insertionSort() {
    for (var i = 1; i < this.arr.length; i++) {
      var key = this.arr[i];
      var j = i - 1;
      while (j >= 0 && this.arr[j] > key) {
        this.arr[j + 1] = this.arr[j];
        j = j - 1;
      }
      this.arr[j + 1] = key;
      await this.delay(150);
    }
    console.log(this.arr);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  reset(){
    this.arr = [];
    for (var i = 0, t = 80; i < t; i++) {
      this.arr.push(Math.floor(Math.random() * 600) + 50)
    }
    console.log(this.arr);
  }

  ngOnInit() {
    this.reset();
  }

}
