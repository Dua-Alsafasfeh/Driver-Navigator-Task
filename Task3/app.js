'use strict';
let stringg = "aabccbaa";
function palindrome(str)
{
    let len = str.length;

  let answer = true;

    if(len%2 != 0)
    {
        len--;
        let firstpart = str.slice(0,len/2);
        let lastpart = str.slice(len/2 +1 ,  len +1);
      
        console.log(str);
        console.log(firstpart);
        console.log(lastpart);
        let last2 = lastpart.length -1;

        for (let i = 0; i < firstpart.length; i++) {
            if(firstpart[i] != lastpart[last2])
            {
                answer = false;
            }

            last2--;
            
            
        }

    }
    else
    {
        
let last2 = str.length - 1;
        for (let i = 0 ; i < len; i++) {
            if(str[i] != str[last2])
            {
                answer = false;
            }

            last2 --;
            
        }



    }
    console.log(answer);
    return answer;
}


document.body.innerHTML = palindrome(stringg);