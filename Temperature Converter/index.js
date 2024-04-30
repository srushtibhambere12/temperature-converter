
    function fun1(){
         c=document.getElementById("celcius").value
         f=document.getElementById("fahreneit").value
         k=document.getElementById("kelvin").value
        if( c!= ""){
            cel1();
        }
        if( f!= ""){
            far1();
        }
        if( k!= ""){
            kel1();
        }
       
       
    }
    function cel1(){
        var cel= document.getElementById("celcius").value;
       
        var cTemp = parseFloat(cel);
        var fTemp = Math.round((cTemp) * (9/5)+32);
        var kTemp = Math.round((cTemp) + 273.15);
        document.getElementById("kelvin").value= kTemp;
        document.getElementById("fahreneit").value=fTemp;
    }
    function far1(){
      
        var far= document.getElementById("fahreneit").value;
        var fTemp = parseFloat(far);
        var cTemp = Math.round(5/9 * (fTemp - 32));
        var kTemp = Math.round((fTemp - 32)*5/9  + 273.15);
        document.getElementById("celcius").value=cTemp;
        document.getElementById("kelvin").value=kTemp;
    }
    function kel1(){
       
        var kel= document.getElementById("kelvin").value;
     
        var kTemp =parseFloat(kel);
        var cTemp =Math.round( kTemp-273);
        var fTemp =Math.round((9/5)*(kTemp - 273)+32);
         
        document.getElementById("celcius").value= cTemp;
        document.getElementById("fahreneit").value=fTemp;
    }
    
