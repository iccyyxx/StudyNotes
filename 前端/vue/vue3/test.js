let obj = {}
function fun(obj) {
  obj.name = "1";
  console.log(obj);
  obj = {
    name: 2
  };
  console.log(obj);
}
fun(obj)
console.log(obj.name);