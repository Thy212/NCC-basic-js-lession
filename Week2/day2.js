// Kiểu 1: Lặp với số lần biết trước
//EX1: In ra dòng chữ Hello NCC 10 lần
for (var i = 0; i < 10; i++)
{
    console.log('Hello NCC');
}
//EX2: In ra các số chẵn có giá trị nhỏ hơn 10
for(var i = 0; i < 10; i += 2)
{
    console.log(i);
}


// Kiểu 2: Lặp với số lần chưa biết trước
//EX3: Tìm các số nguyên dương không lớn hơn 10: a < 10 (a là số nguyên)
var a = 0
while(a < 10){
    console.log(a);
    a += 1;
}

//ARRAY - Mảng
//Có 1 dãy các số a1, a2, a3, a4,...a(n) => tính tổng của dãy này
var arr = [1, 5, 8, 10, 9, 55];
console.log(arr[5] + arr[4]);
//duyệt mảng: in ra tất cả giá trị của các ô trong mảng
var total = 0;
for(var i = 0; i < arr.length; i++){
    total += arr[i];
}
console.log(total);
console.log(arr);
//Chèn 1 phần tử vào mảng:
arr.push(10);
console.log(arr);
//Xóa 1 phần tử ở cuối mảng:
arr.pop();
console.log(arr);
//Xóa 1 phần tử ở đầu mảng:
arr.shift();
console.log(arr);
//chèn 1 phần tử vào đầu mảng;
arr.unshift(100);
console.log(arr);
//Thêm vào 1 vị trí bất kì;
//chèn vào vị trí 3, giá trị 82
arr.splice(3, 0, 82);
console.log(arr);
//Xóa 1 phần tử ở một vị trí bất kì;
//xóa vị trí 4
arr.splice(4, 1);
console.log(arr);
//EX4: Tính 10 số fibonacci đầu tiên
var fibo = [1, 1];
for (var i = 2; i < 10; i++)
{
    fibo.push(fibo[i-1] + fibo[i-2]);
}
console.log(fibo);
//Duyệt ngược mảng
for(var i = arr.length - 1; i >= 0; i--)
{
    console.log(arr[i]);
    if(i == 4)
        continue;
    if(i == 1)
        break;
}