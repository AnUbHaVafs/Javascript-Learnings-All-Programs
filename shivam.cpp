#include <bits/stdc++.h>
using namespace std;

int teamCompetitiion(int N, int A[])
{
    map<int, int> pos;
    N = 2 * N;
    for (int i = 0; i < N; i++)
    {
        for (int j = i + 1; j < N; j++)
        {
            if (A[i] == A[j])
            {
                int len = j - i - 1;
                pos[len] = A[i];
            }
        }
    }
    int ans = 0;
    int tn = N + 1;
    map<int, int>::iterator itr;
    for (itr = pos.begin(); itr != pos.end(); itr++)
    {
        if (ans == itr->first)
        {
            tn = min(tn, itr->second);
        }
        else
        {
            ans = max(ans, itr->first);
            tn = pos[ans];
        }
    }
    return tn;
}

int main()
{
    int N = 4;
    int A[8] = {1, 2, 3, 4, 4, 3, 2, 0};
    cout << teamCompetitiion(N, A);
}