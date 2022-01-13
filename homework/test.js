class vector {
    constructor(a){
        this.a=a;
    }
    add(v){
        var r=[];
        var x=this;
        for(var i=0;i<x.a.length;++i)r[i]=x.a[i]+v.a[i];
        return new vector(r);
    }
    sub(v){
        var r=[];
        var x=this;
        for(var i=0;i<x.a.length;++i)r[i]=x.a[i]-v.a[i];
        return new vector(r);
    }
    dot(v){
        var miku=0;
        for(var i=0;i<x.a.length;++i)miku+=x.a[i]*v.a[i];
        return miku;
    }neg(){
        var r=[];
        var x=this;
        for(var i=0;i<x.a.length;++i)r[i]=-1*x.a[i];
        return new vector(r);
    }
}
var x=new vector([1,2,3]);
var nx = x.neg()
var b = x.add(nx)
var t = x.dot(x)
var y=new vector([4,5,6]);
console.log(nx);
console.log(b);
console.log(t);