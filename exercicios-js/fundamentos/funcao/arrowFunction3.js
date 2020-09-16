let ComparaComThis = function(param){
    console.log(this === param)
}

ComparaComThis(global);

const obj = {}
ComparaComThis = ComparaComThis.bind(obj)
ComparaComThis(global)
ComparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)

comparaComThisArrow(module.exports)
comparaComThisArrow(this)
