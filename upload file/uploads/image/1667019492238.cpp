#include<iostream>                               // Find the maximum number
using namespace std;

int main()
{
    int a,b,c;                                   // Declarartion of variable
    cin>>a>>b>>c;                                // Taking value of variable from users

    // Now find which is maximum

    if (a>b)
    {
        if (a>c)                                 // Here there is if statement in one if statement
        {
            cout<<"a is maximum"<<a<<endl;
        }
        else
        {
            cout<<"c is maximum"<<c<<endl;
        }
        
    }
    
    else
    {
         if (b>c)
         {
            cout<<"b is maximum"<<b<<endl;
         }
          
         else
         {
             cout<<"c is maximum"<<c<<endl;
         }
          
    }
    
    return 0;
}
