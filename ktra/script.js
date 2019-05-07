// Bài1
function timSoLonThuNhi(a) {
  let max1 = (max2 = 0);

  for (let i = 0; i < a.length; i++) {
    if (a[i] > max1) {
      max2 = max1;
      max1 = a[i];
    } else if (a[i] > max2 && a[i] < max1) {
      max2 = a[i];
    }
  }
  return max2;
}
	
//bài 2
function timChuoiCoDoDaiLonNhat(arr){
  let newarr = [];
  newarr = arr.sort(function(a, b){return b.length - a.length});
  return newarr[0];

}

//Bài 3
function kiemTraChuoi(str, target) {
  if (str.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}

//Bài 4
function kiemTraMang(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(i != j){
        if(arr[i] == arr[j]){
          return("true");
        }
      }
    }
  }
  return("false");
}

//Bài 5
function soLuongThe(){
	document.getElementsByTagName("").length;
}

