//sort a array on behalf ocuurance of any character
function sortArr(arr,letter){
    let arr2=arr.sort((a,b)=>{
    b=b.split('').filter((ele)=>letter==ele).length;
    a=a.split('').filter((ele)=>letter==ele).length;
    return a-b;});
    return arr2;
}
let arr=["shiva","soni","shivaa","sonii","aaaaaaa","adfsdajka","fgtja","fdgt","fgh"];

let res=sortArr(arr,'g');
console.log(res)