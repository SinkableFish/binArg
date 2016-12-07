var x = new Array(0,0.2,0.4,0.6,0.8,1,1.2,1.4,1.6,1.8,2,2.2,2.4,2.6,2.8,3);
// var y = new Array(6.4,12,18,24,29.2,35,40,46,51.8,58);
// var y = new Array(10.7,21.2,31.8,42.2,52.4,63,75.4,87,98.8,109.6);
var y = new Array(120,180,240,300,340,400,460,500,560,620,680,720,780,840,900,960);
var sum;
function binArg(x,y){
	var i, xSquSum=0, xSum=0, ySum=0, xySum=0, maxLinearityError=0, linearityError=0, idealY;
	var b=0, a=0;
	for(i=0; i<x.length; i++)
		xSum += x[i];
	for(i=0; i<x.length; i++)
		ySum += y[i];
	for(i=0; i<x.length; i++)
		xySum += x[i]*y[i];
	for(i=0; i<x.length; i++)
		xSquSum += x[i]*x[i];
	b = ((xSquSum*ySum)-(xSum*xySum))/(x.length*xSquSum-xSum*xSum);
	a = (x.length*xySum-xSum*ySum)/(x.length*xSquSum-xSum*xSum);
	for(i=0; i<x.length; i++)
	{
		linearityError = (y[i]-(a*x[i] + b))/ySum;
		if(linearityError>maxLinearityError)
			maxLinearityError = linearityError;
	}
	return ("斜率="+a +'\n'+ "截距="+ b +'\n'+ '非线性误差='+maxLinearityError);
}
sum = binArg(x,y);
console.log(sum);