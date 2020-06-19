function table(){
    var table_content = ''
    for(var i=1;i<=9;i++){
        for(var j=1;j<=i;j++){
            table_content +=i+'*'+j+'='+i*j+'\t'
        }
        table_content+='\n';
    }
    console.log(table_content)
}
table();
