

$("#btn").on("click",function(){
  let w = $("#weight").val();
  let h = $("#tall").val();
  let bmi =Math.round(w / ((h/100)*(h/100))) ;
  let d = $("#day").val();

  console.log(w);
  console.log(h);
  console.log(bmi);
  console.log(d);

  $(".bmi_total").fadeIn();

  $("#bmi_text").fadeIn();

  $("#bmi_kekka").text(bmi);

 localStorage.setItem(d,bmi);

 const level = ["痩せすぎだよ","適正体重！","ぽっちゃりさん","もう食うなデブ！"]

// console.log(level);

 if (bmi <= 19){
  console.log(level[0]);
  $("#bmi_text").text("痩せすぎだよ");
 }else if(bmi < 25 && bmi >=19){
  console.log(level[1]);
  $("#bmi_text").text("適正体重！");
 }else if(bmi < 35 && bmi >=25){
  console.log(level[2]);
  $("#bmi_text").text("ぽっちゃりさん");
 }else{
  console.log(level[3]);
  $("#bmi_text").text("もう食うなデブ！");}



 const html = `
<tr>
    <th>日付${d}の</th>
    <td>BMIは${bmi}です。</td>
</tr>`

$("#list").append(html); 

})

$("#btn2").on("click",function(){
  $("#weight,#tall,#day").val("");
  $(".bmi_total").hide();
  $("#bmi_text").hide();
});

$("#btn3").on("click",function(){
  localStorage.clear();
  $("#list").hide();
  $(".bmi_total").hide();
  $("#bmi_text").hide();
});
