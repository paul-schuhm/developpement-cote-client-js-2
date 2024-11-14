
function computeAverage(grades){

    if(!Array.isArray(grades) || grades.length === 0){
        throw new Error("Merci de fournir une collection de notes contenant au moins une note");
    }

    return grades.reduce((acc, val) => acc + val) / grades.length;
}

export {computeAverage}