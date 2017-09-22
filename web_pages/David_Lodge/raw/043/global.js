function toggle_displaying(id) {
//Function to toggle the display of an HTML element by id.
   dom = document.getElementById ? 1 : 0;
   ie4 = (document.all && !dom) ? 1 : 0;
   opera = (navigator.userAgent.indexOf('Opera')!=-1) ? 1 : 0;
   supported = ((dom||ie4||opera)) ? 1 : 0;

   if(!supported)
   return;

   if (dom && !document.all)
   document.all = document.getElementsByTagName("*")

   obj = (dom) ? document.getElementById(id) : document.all(id)
   obj_inv = (dom) ? document.getElementById(id + "_inverse") : document.all(id + "_inverse")
   if(obj.style.display!='none') {
      obj.style.display='none';
      obj_inv.style.display='inline';

   } else {
      obj.style.display='inline';
      obj_inv.style.display='none';
   }

}

