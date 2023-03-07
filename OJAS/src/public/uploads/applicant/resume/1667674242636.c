#include <stdio.h>
// Check the number is prime or not //

int primenumber(int num)
{
         
     for (int i = 2; i*i < num; i++)            // Because to find number a prime we have to go from 2 to that numbers previous number //
     {
         if(num%i==0)                          // Here % stands for modulo //
         {
             printf("The %d is not a prime number", num);
            break;        
         }
         else
         {
             printf("The %d is a prime number", num);
             break;
         }
              
     }
     
}
int main()
{
    int num;
    printf("Enter the number\n");
    scanf("%d", &num);
    primenumber(num); 
    return 0;
}