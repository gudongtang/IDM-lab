var data = {};
function Click(number1,number2) {
  data[number1] = number2;
}
function Sub() {
  var finish = true;
  for(var i in data) {
    if(typeof(data[i]) === undefined)
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
