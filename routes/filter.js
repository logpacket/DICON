var filter=function(data,res) {
    for (i in data) {
        if ((i === "'") || (i === '"') || (i === '\\') || (i === '{') || (i === '}') || (i === ';'))
            return -1;
    }
};

module.exports =filter;