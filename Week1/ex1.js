/**
 * Code trong 1 file, các yêu cầu sau:
 *
 * Bài 1: Viết code tính tổng 2 biến a và b
 * 
 * Bài 2: Viết code in ra chữ Mot hai ba bon sau chin muoi hai
 * 
 * Bài 3: Viết code so sánh giá trị 2 biến x và y
 * 
 * Bài 4: Viết code so sánh 2 chuỗi kí tự s1 và s2 có giống nhau hay không
 * 
 * 
 */

//Bài 1: Viết code tính tổng 2 biến a và b
var a = 20, b = 50;
console.log('Bai 1:' + (a+b));

//Bài 2: Viết code in ra chữ Mot hai ba bon sau chin muoi hai
var text = 'Mot hai ba bon sau chin muoi hai';
console.log('Bai 2:' + text);

//Bài 3: Viết code so sánh giá trị 2 biến x và y
var x = -50, y = 50;

if(x > y)
    console.log('Bai 3: x = ' + x + ' lon hon y = ' + y);
else if(x < y)
    console.log('Bai 3: x = ' + x + ' nho hon y = ' + y);
else
    console.log('Bai 3: x = ' + x + ' bang y = ' + y);

//Bài 4: Viết code so sánh 2 chuỗi kí tự s1 và s2 có giống nhau hay không
var str1 = 'This is a String', str2 = 'This is a String';

if(str1 == str2)
    console.log('Bai 4: Hai chuoi nhap giong nhau');
else
    console.log('Bai 4: Hai chuoi nhap khong giong nhau');