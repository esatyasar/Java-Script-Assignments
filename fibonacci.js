// Fibonacci numbers : 1,1,2,3,5,8,13,21,34,55,89,144,233,.......vb.

// Solutions
	/* for 7 =>21  How did be 21  ?

		f(2) = f(1) + f(0)    f(0)= 1 ,  f(1) = 1  =>> f(2) = 2
		f(3) = f(2) + f(1)    f(2)= 2 ,  f(1) = 1  =>> f(3) = 3
		f(4) = f(3) + f(2)    f(3)= 3 ,  f(2) = 2  =>> f(4) = 5
		f(5) = f(4) + f(3)    f(4)= 5 ,  f(3) = 3  =>> f(5) = 8
		f(6) = f(5) + f(4)    f(5)= 8  , f(4) = 5  =>> f(6) = 13

		f(7) = f(6) + f(5)    f(6)= 13 , f(5) = 8  =>> f(6) = 21
 */

function fibonacci(n){
    if (n === 0 || n === 1){
        return 1;
    }else{
        return fibonacci(n-1) + fibonacci(n-2)
    }
}
console.log(fibonacci(11));