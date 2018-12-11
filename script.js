var listCount = [1,2, [1.1,1.2,1.3] ,3];

function generateList(arr) { // creates an unordered list
    var ul = document.createElement('ul');

    for (var i = 0; i < arr.length; i++) {

        var li = document.createElement('li');
        (typeof arr[i] === 'number') ? li.innerText = arr[i] : li.appendChild(generateList(arr[i]));
        ul.appendChild(li);
    }
    return ul;
    }
document.body.insertBefore(generateList(listCount), document.body.children[2]);
