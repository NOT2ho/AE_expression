a=effect("phase")("Slider");
b=1 / effect("amp")("Slider");
d=effect("freq")("Slider") * 3.5 ;
R=effect("resolution")("Slider");
c=effect("height")("Slider")
t= effect("theta range")("Slider")* Math.PI;
P=[];

for (i=0;i<R*t;i++){
P.push([c * Math.cos(i/R) + (Math.cos(i/R) * Math.sin(d * (a + (Math.PI) * (i/R))))/b, c * Math.sin(i/R) + (Math.sin(i/R) * Math.sin(d * (a + (Math.PI) * (i/R))))/b]);
}

createPath(P,[],[], false);