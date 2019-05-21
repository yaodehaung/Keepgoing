#include <stdio.h>
#include <stdlib.h>

int fib(int); /* fib() 函數的原型宣告*/

int main(void)
{
	int i , n;
	printf("請出入要計算到第幾個費式數列");
	scanf("%d", &n);

	for(i=0;i<=n;i++)
	  printf("fib(%)=%d\n",i,fib(i));

	return 0;
}

int fib(int n)
{
	if(n==0)
		return 0;
	else if (n==1 || n==2)
		return 1;
	else
		return (fib(n-1)+fib(n-2));

}
