

$("#btn").on("click",function(){
  let w = $("#weight").val();
  let h = $("#tall").val();
  let bmi =Math.round(w / ((h/100)*(h/100))) ;
  let d = $("#day").val();

  console.log(w);
  console.log(h);
  console.log(bmi);
  console.log(d);

  $("#bmi_total").html(`あなたのBMIは${bmi}です`);

 localStorage.setItem(d,bmi);

})

$("#btn2").on("click",function(){
  
})