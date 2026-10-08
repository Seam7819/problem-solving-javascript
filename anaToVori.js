function AnaToVori(ana) {

    if (typeof ana !== "number" || ana < 0) {
        return "Please provide a valid intiger"
    } else {
        const vori = ana * 0.0625;
        return vori;
    }

}

console.log(AnaToVori(16));