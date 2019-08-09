
/*
* 为值提供一种统一的描述
**/

interface LabledValue {
    label: string
}

function printLabel(labelObj: LabledValue){
    console.log(labelObj.label);
}

let myLabel = {size: 10, label: 'size 10 object'};

printLabel(myLabel);

/*
* 接口的类型检查对属性顺序没有要求，只要属性是否存在已经属性的类型有要求
**/

let labelObject: { label: string };

