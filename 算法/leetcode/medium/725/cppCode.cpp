
#include <bits/stdc++.h>
using namespace std;

//   Definition for singly-linked list.
struct ListNode
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution
{
public:
    vector<ListNode *> splitListToParts(ListNode *head, int k)
    {
        int n = 0;
        // 遍历链表长度
        ListNode *t = head;
        while (t != nullptr)
        {
            n++;
            t = t->next;
        }
        int q = n / k, r = n % k;
        vector<ListNode *> parts(k, nullptr);
        ListNode *curr = head;
        for (int i = 0; i < k && curr != nullptr; i++)
        {
            parts[i] = curr;
            // 判断是否有多出来的
            int partSize = q + (i < r ? 1 : 0);
            for (int j = 1; j < partSize; j++)
            {
                curr = curr->next;
            }
            ListNode *next = curr->next;
            curr->next = nullptr;
            curr = next;
        }
        return parts;
    }
};
int main()
{
    Solution solution;
    ListNode *head = new ListNode;
    int k;
    solution.splitListToParts(head, k);
}