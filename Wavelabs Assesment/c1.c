#include <stdio.h>
void arr_matrix (int matrix[5][2], int s)
{
  //[2] because we it is bi-directional network can connect with only 2 labs.
  int count = 0;
  int c[4];
  for (int i = 0; i < s; i++)
    {
      int x = matrix[i][0];
      int y = matrix[i][1];
      for (int j = 0; j < s; j++)
	{
	  for (int k = 0; k < 2; k++)
	    {
	      if (x == matrix[j][k] || y == matrix[j][k])
		{
		  count++;
		}
	    }
	}
      c[i] = count - 1;
      count = 0;
    }
  for (int i = 0; i < 4; i++)
    {
      printf ("rank of %d and %d is: %d \n", matrix[i][0], matrix[i][1],
	      c[i]);
    }
  int higestRank = c[0];
  for (int i = 0; i < s; i++)
    {
      //Compare elements of array with max    
      if (c[i] > higestRank)
	higestRank = c[i];
    }
  printf ("maximum rank in network is: %d  \n", higestRank);
  for (int i = 0; i < s; i++)
    {
      if (c[i] == higestRank)
	{
	  printf ("[%d,%d] has the higest rank:%d  \n", matrix[i][0],
		  matrix[i][1], higestRank);
	}
    }
}

void main ()
{
  int n;
  printf ("Enter number of infrastructure labs: \n");
  scanf ("%d", &n);
  int cable[10][2] = { {0, 1}, {0, 3}, {1, 2}, {1, 3} };	//[[0,1],[0,3],[1,2],[1,3]](given network)
  int i, j;
  for (i = 0; i < n; i++)
    {
      printf ("[");
      for (j = 0; j < 2; j++)
	{
	  printf ("%d", cable[i][j]);
	  printf (",");
	}
      printf ("]");
    }
  printf ("\n");
  arr_matrix (cable, n);

}