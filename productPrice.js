function pandaConst(shingara,samosa, jilapi){
    const shingaraPrice =10;
    const samosaPrice = 15;
    const jilapiPrice = 7;

    if(shingara < 0 || samosa < 0 || jilapi < 0){
        return "Please provide a valid intiger";
    }else if(typeof shingara !== "number" || typeof samosa !== "number" || typeof jilapi !== "number"){
        return "Please provide a valid intiger";
    }

    const totalPrice = (shingara * shingaraPrice) + (samosa * samosaPrice) + (jilapi * jilapiPrice);;
    return totalPrice;
}

console.log(pandaConst(2, 3, 4));