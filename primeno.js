Prime=function()
	{
		var i,flag=0,number;
		number = 13;

		for(i=2; i <= number/2; i++)
		{
			if(number%i == 0)
			{
				flag = 1;
				break;
			}
		}
		if(flag == 0)
		{
			console.log(number,"is a prime number");
		}
		else
		{
			console.log(number," is not Prime");
		}
    }
    Prime();