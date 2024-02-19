// Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 2 + 3 + ... + n
console.log('-------------Bai 1:-------------\nn = 5');
var total = 0, n = 5;
for(var i = n; i > 0; i--){
    total += i;
}
console.log('total = ' + total);
// Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 1/2 + 1/3 + 1/4 + ... + 1/n
console.log('-------------Bai 2:-------------\nn = 5');
var total = 0, n = 5;
for(var i = n; i > 0; i--){
    total += 1/i;
}
console.log('total = ' + total);
// Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 4 + 9 + 16 + 25 + ... + n^2
console.log('-------------Bai 3:-------------\nn = 5');
var total = 0, n = 5;
for(var i = n; i > 0; i--){
    total += Math.pow(i, 2);
}
console.log('total = ' + total);
// Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 8 + 27 + ... + n^3
console.log('-------------Bai 4:-------------\nn = 5');
var total = 0, n = 5;
for(var i = n; i > 0; i--){
    total += Math.pow(i, 2);
}
console.log('total = ' + total);
// Dùng vòng lặp while, in ra tất cả số nguyên dương lẻ < 100
console.log('-------------Bai 5:-------------');
const arr1 = [];
var n = 0, i = 0;
while(n <= 100){
    if( (n%2) != 0)
    {
        arr1.splice(i, 0, n);
        i++;
    }
    n++;
}
console.log(arr1);
// Dùng vòng lặp while, in ra tất cả số nguyên dương chẵn < 100
console.log('-------------Bai 6:-------------');
const arr2 = [];
var n = 0, i = 0;
while(n <= 100){
    if( (n%2) == 0)
    {
        arr2.splice(i, 0, n);
        i++;
    }
    n++;
}
console.log(arr2);
// Dùng vòng lặp while, in ra tất cả số nguyên âm lẻ > -100
console.log('-------------Bai 7:-------------');
const arr3 = [];
var n = 0, i = 0;
while(n > (-100)){
    if( (n%2) != 0)
    {
        arr3.splice(i, 0, n);
        i++;
    }
    n--;
}
console.log(arr3);
// Dùng vòng lặp while, in ra tất cả số nguyên âm chẵn > -100
console.log('-------------Bai 8:-------------');
const arr4 = [];
var n = 0, i = 0;
while(n > (-100)){
    if( (n%2) == 0)
    {
        arr4.splice(i, 0, n);
        i++;
    }
    n--;
}
console.log(arr4);
/*Viết chương trình in ra hình chữ nhật có cạnh a, b Ví dụ:
a = 3, b = 5
* * * * *
* * * * *
* * * * * */
console.log('-------------Bai 9:-------------\na = 3, b = 5');

const a = 3, b = 5;
for(var i = a; i > 0; i--){
    var k = b, str = '';
    while(k > 0){
        str += '* ';
        k--;
    }
    console.log(str);
}
/*Viết chương trình in ra tam giác cân có chiều cao = h. Ví dụ:
h = 3
  *
 * *
* * * */
console.log('-------------Bai 10:-------------\nh = 5');
const h = 5;
for(var i = 1; i <= h; i++){
    var k = i, str = ''; //i = 5, n = 6
    for (var j = 0; j < h - i; j++) {
        str += ' ';
    }
    while(k > 0){
        str += '* ';
        k--;
    }
    console.log(str);
}
// Đếm số lượng các số dương trong mảng arr = [10, 11, 12, -10, -11, -12]
console.log('-------------Bai 11:-------------\narr = [10, 11, 12, -10, -11, -12]');
var arr5 = [10, 11, 12, -10, -11, -12], count1 = 0;
for(var i = 0; i < arr5.length; i++){
    if (arr5[i] > 0){
        count1++;
    }
}
console.log('result = ' + count1);
// Đếm số lượng các số âm trong mảng arr = [10, 11, 12, -10, -11, -12]
console.log('-------------Bai 12:-------------\narr = [10, 11, 12, -10, -11, -12]');
var count2 = 0;
for(var i = 0; i < arr5.length; i++){
    if (arr5[i] < 0){
        count2++;
    }
}
console.log('result = ' + count2);
// Đếm số lượng các số chẵn trong mảng arr = [10, 11, 12, 13, 14, 15]
console.log('-------------Bai 13:-------------\narr = [10, 11, 12, 13, 14, 15]');
var arr6 = [10, 11, 12, 13, 14, 15], count3 = 0;
for(var i = 0; i < arr6.length; i++){
    if ((arr6[i]%2) == 0){
        count3++;
    }
}
console.log('result = ' + count3);
// Đếm số lượng các số lẻ trong mảng arr = [10, 11, 12, 13, 14, 15]
console.log('-------------Bai 14:-------------\narr = [10, 11, 12, 13, 14, 15]');
var count4 = 0;
for(var i = 0; i < arr6.length; i++){
    if ((arr6[i]%2) != 0){
        count4++;
    }
}
console.log('result = ' + count4);
// Tìm số lớn nhất trong mảng arr = [10, 11, 12, 13, 14, 15]
console.log('-------------Bai 15:-------------\narr = [10, 11, 12, 13, 14, 15]');
var max = arr6[0];
for(var i = 0; i < arr6.length; i++){
    if (max < arr6[i]){
        max = arr6[i];
    }
}
console.log('result = ' + max);
// Tìm số bé nhất trong mảng arr = [10, 11, 12, 13, 14, 15]
console.log('-------------Bai 16:-------------\narr = [10, 11, 12, 13, 14, 15]');
var min = arr6[0];
for(var i = 0; i < arr6.length - 1; i++){
    if (min > arr6[i+1]){
        min = arr6[i + 1];
        console.log('result = ' + min);
    }
}
console.log('result = ' + min);
// Tính tổng các số âm trong mảng arr = [10, 11, 12, -10, -11, -12]
console.log('-------------Bai 17:-------------\narr = [10, 11, 12, -10, -11, -12]');
var arr7 = [10, 11, 12, -10, -11, -12], count5 = 0;
for(var i = 0; i < arr7.length; i++){
    if (arr7[i] < 0){
        count5++;
    }
}
console.log('result = ' + count5);
// Tính tổng các số dương trong mảng arr = [10, 11, 12, -10, -11, -12]
console.log('-------------Bai 18:-------------\narr = [10, 11, 12, -10, -11, -12]');
var count6 = 0;
for(var i = 0; i < arr7.length; i++){
    if (arr7[i] > 0){
        count6++;
    }
}
console.log('result = ' + count6);
// Tìm số chẵn đầu tiên trong mảng arr = [10, 11, 12, 13, 14, 15] và arr2 = [1, 3, 5, 7, 9]. Nếu không tìm được số chẵn nào thì in ra -1
console.log('-------------Bai 19:-------------\narr = [10, 11, 12, 13, 14, 15] and arr2 = [1, 3, 5, 7, 9]');
var arr8 = [10, 11, 12, 13, 14, 15], arr9 = [1, 3, 5, 7, 9];
console.log('arr = [10, 11, 12, 13, 14, 15]');
for(var i = 0; i < arr8.length; i++){
    if ((arr8[i]%2) == 0){
        console.log('result = ' + arr8[i]);
        break;
    }
}
if(i == arr8.length)
{
    console.log('-1');
}
console.log('arr2 = [1, 3, 5, 7, 9]');
for(i = 0; i < arr9.length; i++){
    if ((arr9[i]%2) == 0){
        console.log('result = ' + arr9[i]);
        break;
    }
}
if(i == arr9.length)
{
    console.log('-1');
}
// Tìm số chẵn cuối cùng trong mảng arr = [10, 11, 12, 13, 14, 15] và arr2 = [1, 3, 5, 7, 9]. Nếu không tìm được số chẵn nào thì in ra -1
console.log('-------------Bai 20:-------------\narr = [10, 11, 12, 13, 14, 15] and arr2 = [1, 3, 5, 7, 9]');
console.log('arr = [10, 11, 12, 13, 14, 15]');
for(var i = arr8.length - 1; i >= 0; i--){
    if ((arr8[i]%2) == 0){
        console.log('result = ' + arr8[i]);
        break;
    }
}
if(i == -1)
{
        console.log('-1');
}
console.log('arr2 = [1, 3, 5, 7, 9]');
for(i = arr9.length - 1; i >= 0; i--){
    if ((arr9[i]%2) == 0){
        console.log('result = ' + arr9[i]);
        break;
    }
}
if(i == -1)
{
    console.log('-1');
}