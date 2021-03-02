


function recursive(num, str){
    if (num <= 2) { 
        recursive(num+1, str+'a');
        recursive(num+1, str+'b');
    }  
    console.log(num + '--' + str);
}

recursive(0, '');


/* 
0 -- ''
1 -- 'a'
2 -- 'aa'
3 -- 'aaa'
3 -- 'aab'
2 -- 'ab'


*/