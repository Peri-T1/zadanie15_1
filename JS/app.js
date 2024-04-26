
// Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
// 1- создаем массив
// 2- создаем функцию 
// 3- создаем новый объект
// 4- создаем условие который проверяет есть ли значение в массиве если есть возвращает новый заполненный объект

var data = [['a', 1], ['b', 2]];
function myFunc(arr){
    var obj = {}
    if(arr[0]){arr.forEach(function(item){

        obj[item[0]] = item[1] 
       })
       return obj
}}

console.log(myFunc(data))


// // 
// var data = ['1', '2', '3', '1', '2']
// function myFunc() {
// for ( i = 0; i < data.length; i += 1) {
//     if(i !=data.length)
//     data = data.filter(el); 
     
// }
// return data
// }
// console.log(myFunc(data))
// function array_delete( array, key ){

//     resultArray = new Array();

//     // перебираем массив
//     for( let i > 0; i < 3; i++ ){

//         if( i != key ){

//             // добавляем значение в массив
//             resultArray.push( array[ i ] );
//         }
//     }

//     return resultArray;
// }
// console.log(array_delete)


// var data = ["1", "2", "3", "1", "2"];
// function myFunc(arr){
//     var obj = {}
//     if(0 < data < 3){arr.forEach(function(item){
// delete data[arr]
// obj.append = data[arr]})

// return obj}}
// console.log( myFunc(data)); 
//     a = [96, 72, 44, 29, 97, 69, 25, 12]
// print("A =", a)

// b = []

// for i in a:
//     if 20 < i < 90:
//         a.remove(i)
//         b.append(i)

// print("A =", a)
// print("B =", b)

   //  function unique(arr) {
   //    let result = [];
    
   //    for (let str of arr) {
   //      if (!result.includes(str)) {
   //        result.push(str);
   //      }
   //    }
    
   //    return result;
   //  }
    
   //  let strings = ["кришна", "кришна", "харе", "харе",
   //    "харе", "харе", "кришна", "кришна", ":-O"
   //  ];
    
   //  alert( unique(strings) ); // кришна, харе, :-O
