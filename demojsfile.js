var cities = [];
var order = [];
var elem=prompt("ENTER CITIES");
var rows=elem;
var cols=elem;
var totalCities = elem;
var geek=new Array(rows);
for(var i=0;i<rows;i++)
  {
    geek[i]=new Array(cols);
  }
for(var i=0;i<rows;i++)
  {
    for(var j=0;j<cols;j++)
      {
        geek[i][j]=prompt("ENTER DISTANCE BW CITIES "+parseInt(i+1)+" and "+parseInt(j+1));
      }
  }
  let y=200;
  let z=200;
  var widtharr=new Array(rows);
  var heightarr=new Array(rows);
  for(var i=0;i<rows;i++)
  {
    widtharr[i]=y;
    heightarr[i]=z;
    if(i%2==0)
    {
    y+=30;
    z+=30;
    }
    else 
    {
      y+=30;
      z-=30;
    }
  }
var totalPermutations;
var count = 0;
var recordDistance=999999;
var bestEver;
function setup() {
  createCanvas(400, 600);
  for (var i = 0; i < totalCities; i++) {
    var v = createVector(widtharr[i], heightarr[i]);
    cities[i] = v;
    order[i] = i;
  }
  var d = calcDistance(cities, order);
  recordDistance = d;
  bestEver = order.slice();
  totalPermutations = factorial(totalCities);
  console.log(totalPermutations);
}
function draw() {
  background(0);
  frameRate(5);
  fill(255);
   let bhh=1;
  for (var i = 0; i < cities.length; i++) {
    let p=document.createElement('p');
    p.innerHTML=`${bhh}`;
    bhh++;
    document.body.appendChild(p);
    p.style.position="absolute";
    p.style.left=`${cities[i].x+600}px`;
    p.style.top=`${cities[i].y-10}px`;
    p.style.color="white";
    console.log(cities[i].x);
    ellipse(cities[i].x, cities[i].y, 8, 8);
  }
  stroke(255, 0, 255);
  strokeWeight(4);
  noFill();
  beginShape();
  textSize(32);
  if(recordDistance==999999)
   {
      var f="no path";
      text(f,20,height/2+30);
   }
   else 
   {
   var s = '';
   for (var i = 0; i < bestEver.length; i++) {
    s += (bestEver[i]+1);
   }
   s+=(bestEver[0]+1);
   text(parseInt(recordDistance),20,height/2+30);
 }
   noFill();
  text(s,20,height/2);
  for (var i = 0; i < order.length; i++) 
  {
    var n = bestEver[i];
    vertex(cities[n].x, cities[n].y);
  }
  endShape();
  translate(0, height / 2);
  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
   let dhh=1;
  for (var i = 0; i < cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 8, 8);
  }
  for (var i = 0; i < order.length; i++) {
    var n = order[i];
    vertex(cities[n].x, cities[n].y);
  }
  endShape();
  var d = calcDistance(cities, order);
  if (d < recordDistance) {
    recordDistance = d;
    bestEver = order.slice();
  }
  textSize(32);
   var s = '';
   for (var i = 0; i < order.length; i++) {
    s += order[i]+1;
   }
   s+=order[0]+1;
   fill(255);
  text(s,20,height/2);
  var percent = 100 * ((count +1)/ totalPermutations);
  text(nf(percent, 0, 2) + "% completed", 20, height / 2 - 25);
  nextOrder();
}
function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}
function calcDistance(points, order) {
  var sum = 0;
  for (var i = 0; i < order.length - 1; i++) {
    var cityAIndex = order[i];
    var cityA = points[cityAIndex];
    var cityBIndex = order[i + 1];
    var cityB = points[cityBIndex];
    var d = parseInt(geek[order[i]][order[i+1]]);
    if(d==999999)
    {
      sum=999999;
      break;
    }
    sum += d;
  }
  if(sum!=999999)
  {
  sum+=parseInt(geek[order[order.length - 1]][order[0]]);
}
  return sum;
}
function nextOrder() {
  count++;
  var largestI = -1;
  for (var i = 0; i < order.length - 1; i++) {
    if (order[i] < order[i + 1]) {
      largestI = i;
    }
  }
  if (largestI == -1) {
    noLoop();
    console.log('finished');
  }
  var largestJ = -1;
  for (var j = 0; j < order.length; j++) {
    if (order[largestI] < order[j]) {
      largestJ = j;
    }
  }
  swap(order, largestI, largestJ);
  var endArray = order.splice(largestI + 1);
  endArray.reverse();
  order = order.concat(endArray);
}
function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
