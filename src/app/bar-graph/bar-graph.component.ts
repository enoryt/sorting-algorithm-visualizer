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

  reset() {
    this.arr = [];
    for (var i = 0, t = 80; i < t; i++) {
      this.arr.push(Math.floor(Math.random() * 600) + 50)
    }
    console.log(this.arr);
  }

  mergeSort() {
    this.mergeSortHelper(0, this.arr.length-1);
    console.log(this.arr);
  }

  async merge(l: number, m: number, r: number) {    
    var i = 0;
    var j = 0;
    var k = 0;
    var n1 = m - l + 1;
    var n2 = r - m;

    /* create temp arrays */
    var L:number[] = [];
    var R:number[] = [];

    /* Copy data to temp arrays L[] and R[] */
    for (i = 0; i < n1; i++)
      L[i] = this.arr[l + i];
    for (j = 0; j < n2; j++)
      R[j] = this.arr[m + 1 + j];
    /* Merge the temp arrays back into arr[l..r]*/
    i = 0; // Initial index of first subarray 
    j = 0; // Initial index of second subarray 
    k = l; // Initial index of merged subarray 
    while (i < n1 && j < n2) {
      await this.delay(25);
      if (L[i] <= R[j]) {
        this.arr[k] = L[i];
        i++;
      }
      else {
        this.arr[k] = R[j];
        j++;
      }
      k++;
    }
    

    /* Copy the remaining elements of L[], if there 
       are any */
    while (i < n1) {
      this.arr[k] = L[i];
      i++;
      k++;
    }

    /* Copy the remaining elements of R[], if there 
       are any */
    while (j < n2) {
      this.arr[k] = R[j];
      j++;
      k++;
    }
  }

  async mergeSortHelper(l: number, r: number) {
    if (l < r) {
      // Same as (l+r)/2, but avoids overflow for 
      // large l and h 
      var m = Math.floor(l+(r-l)/2);
      // Sort first and second halves
      await this.mergeSortHelper(l, m);
      await this.mergeSortHelper(m + 1, r);
      await this.merge(l, m, r);
    }
  }

  ngOnInit() {
    this.reset();
  }

}
