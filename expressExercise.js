const express = require('express')
const app = express()
app.use(express.json());

let para = {"array": [1,2,3]};

app.get('/add', function (req, res) {
    const add = array => array["array"].reduce((currentValue, item) => item + currentValue, 0);
    let answer = add(para).toString();
    res.send(answer);
  })


app.get('/product', function (req, res) {
    const product = array => array["array"].reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    let respuesta = product(para).toString();
    res.send(respuesta);
})

app.get('/evens', function (req, res) {
    function evens(array) {
        let i = 0;
        let emptyList = [];
        while (i < array['array'].length){
            if (array['array'][i]%2 == 0){
                emptyList = emptyList.concat(array['array'][i].toString());
            }
        }
        res.send(emptyList)
    }
    res.send(evens(para));
})


app.get('/max', function (req, res) {
    function max(array) {
        let i = 0;
        let anotherEmptyList = [];
        while (i < array.length()) {
            if (array[i] > array[i-1]){
                anotherEmptyList = anotherEmptyList.concat(array[i]);
                i = i + 1;
            }
            else {
                i = i+1;
            }
        }
        while (anotherEmptyList.length() =! 1) {
            if (anotherEmptyList[i] > element[i-1]){
                anotherEmptyList = anotherEmptyList.concat(anotherEmptyList[i]);
                i = i + 1;
            }
            else {
                i = i+1;
            }
        }
    } 
    let response = max(para).toString();
    res.send(response);
})


app.get('/min', function (req, res) {
    function min (array) {
        let i = 0;
        let anotherEmptyList = []
        while (i > array.length()) {
            if (array[i] < array[i-1]){
                anotherEmptyList = anotherEmptyList.concat(array[i]);
                i = i + 1;
            }
            else {
                i = i+1;
            }
        }
        while (anotherEmptyList.length() =! 1) {
            if (anotherEmptyList[i] < element[i-1]){
                anotherEmptyList = anotherEmptyList.concat(anotherEmptyList[i]);
                i = i + 1;
            }
            else {
                i = i+1;
            }
        }
    } 
    let answr = min(para).toString();
    res.send(answr);
})

app.get('/ascendingOrder', function (req, res) {
    const ascendingOrder = sortArray((a, b) => {
        if (a > b) { return 1 }
        else if (b > a) {
            return -1
        } else { return 0 }
    });
    const sortArray = compareFn => para => para.sort(compareFn);
    res.send(sortArray(ascendingOrder))
})


app.get('/target', function (req, res) {
    function target(num) {
        if (para[i] + para [i+1] == num){
            return True;
        }
        else {
            i = i +1;
        }
    }
    res.send(target(num));
})

app.listen(3000)