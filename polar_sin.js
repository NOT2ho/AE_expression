a=effect("phase")("Slider");
b=1 / effect("amp")("Slider");
d=effect("freq")("Slider")/3.6;
R=effect("resolution")("Slider");
c=effect("height")("Slider")
t= effect("theta range")("Slider");
P=[];

for (i=0;i<R*t;i++){
P.push([c * Math.cos(i/R) + (Math.cos(i/R) * Math.sin(d * (a + (22/7) * (i/R))))/b, c * Math.sin(i/R) + (Math.sin(i/R) * Math.sin(d * (a + (22/7) * (i/R))))/b]);
}

createPath(P,[],[], false);