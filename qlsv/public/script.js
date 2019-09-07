let data=[
    {name:"Robin Huy",year:"1990",email:"robin@github.com",sodienthoai:"123456789"},
    {name:"Nguyễn Văn Tuân",year:"1991",email:"tuan@gmail.com",sodienthoai:"123456789"},
    {name:"Nguyễn Văn Tùng",year:"1992",email:"tung@gmail.com",sodienthoai:"123456789"},
    {name:"Trịnh Quốc Mạnh",year:"1994",email:"manh@gmail.com",sodienthoai:"012345678"},
]

let t='';
for(i=0;i<data.length;i++){
    t+="<tr>"+"<td>"+data[i].name+"</td>"+"<td>"+data[i].year+"</td>"+"<td>"+data[i].email+"</td>"+"<td>"+data[i].sodienthoai+"</td>"+
    "<td><a href='#'><i class='fa fa-pencil-square-o' aria-hidden='true'></i> Chỉnh sửa</a> | <a href='#' style='color: red'><i class='fa fa-trash-o' aria-hidden='true'></i> Xóa</a></td>"+"</tr>";
}
document.getElementById("dl").innerHTML=t;