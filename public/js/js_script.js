function MenuItem(na, kc, pr, gl, la, ve){
    this.name       = na;
    this.kcal       = kc;
    this.price      = pr;
    this.gluten     = gl;
    this.lactose    = la;
    this.vegetarian = ve;
    this.menuInfo   = function(){return this.name}
}

var burger1 = MenuItem("cool burger", 450, 140, true, true, false);
