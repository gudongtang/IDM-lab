data = {weak:0,pant:0,voice:0,fever:0};
function Click(number1,number2) {
  switch(number1)
  {
    case 2:
      data.weak = number2;
      break;
    case 3:
      data.pant = number2;
      break;
    case 4:
      data.voice = number2;
      break;
    case 5:
      data.fever = number2;
      break;
  }
}
function Sub() {
  var finish = true;
  for(var i in data) {
    if(data[i] === 0)
    {
      finish = false;
    }
  }
if(finish)
{
  $.ajax(
    {
      async:false,
      type:"POST",
      url:"submit",
      dataType:"json",
      data:data,
      success:function () {
        alert("提交成功！");
      },
      error:function () {
        alert("提交失败！");
      }
    }
  );
}
else
{
  alert("请选择完成全部问题");
}
}
