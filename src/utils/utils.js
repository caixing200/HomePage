export function setClass(path,basePath){
    const tempArr = basePath.split('/')
    const pathArr = path.split('/')
    if(tempArr.length === 2 && (pathArr[2] === 'erp' || pathArr[2] === 'pump' || pathArr[2] === 'coperation' || pathArr[2] === 'enterprise')){
        return true
    }
    for(let i = 0;i < pathArr.length;i++){
        if(pathArr[i] === tempArr[i] && i === (pathArr.length - 1)){
            return true
        }
    }
}