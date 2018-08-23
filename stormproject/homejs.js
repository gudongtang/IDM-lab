var data = {};
function Click(number1,number2) {
  data[number1] = number2;
}
function Sub() {
  var finish = true;
  if(Object.getOwnPropertyNames(data).length !=4)
  {
    finish = false;
  }
if(finish)
{
  var jsondata = function (data) {
    var objData = {};

    data.forEach((value, key) => objData[key] = value);

    return JSON.stringify(objData);
  };
  $.ajax(
    {
      async:false,
      type:"POST",
      url:"http://127.0.0.1:8087/submit",
      dataType: "json",
      contentType:"text/plain;charset=UTF-8",
      data:JSON.stringify(data),
      success:function (Data) {
        alert(Data);
      },
      error:function (Data) {
        console.log(Data);
      }
    }
  );
}
else
{
  alert("请选择完成全部问题");
}
}
