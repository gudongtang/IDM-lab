var data = {};
function Click(number1,number2) {
  var questname = "member" + number1;
  data[questname] = number2;
}
function Sub() {
  var finish = true;
  if(Object.getOwnPropertyNames(data).length !==4)
  {
    finish = false;
  }
  if(finish)
  {
    data.name = "唐圣凯";
    data.IDnumber = "610402156345278649";
    $.ajax(
      {
        async:false,
        type:"POST",
        url:"http://127.0.0.1:8087/submit",
        dataType: "json",
        contentType:"application/json;charset=UTF-8",
        data:JSON.stringify(data),
        success:function (Data) {
          console.log(Data);
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
