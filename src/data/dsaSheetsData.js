export const DSA_SHEETS = [
  {
    id: "sheet-arrays",
    topic: "Arrays & Searching",
    iconName: "Grid",
    description: "Master two-pointer approach, sliding window, prefix sums, and searching algorithms.",
    totalProblems: 8,
    problems: [
      {
        id: "dsa-1",
        title: "Two Sum",
        difficulty: "Easy",
        companies: ["Google", "Amazon", "Microsoft", "TCS"],
        articleUrl: "https://leetcode.com/problems/two-sum/",
        solutionCode: {
          cpp: `#include <vector>\n#include <unordered_map>\n\nstd::vector<int> twoSum(std::vector<int>& nums, int target) {\n    std::unordered_map<int, int> mp;\n    for (int i = 0; i < nums.size(); i++) {\n        int diff = target - nums[i];\n        if (mp.count(diff)) return {mp[diff], i};\n        mp[nums[i]] = i;\n    }\n    return {};\n}`,
          java: `import java.util.HashMap;\n\nclass Solution {\n    public int[] twoSum(int[] nums, int target) {\n        HashMap<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (map.containsKey(complement)) {\n                return new int[] { map.get(complement), i };\n            }\n            map.put(nums[i], i);\n        }\n        return new int[]{};\n    }\n}`,
          python: `def twoSum(nums: list[int], target: int) -> list[int]:\n    seen = {}\n    for i, num in enumerate(nums):\n        diff = target - num\n        if diff in seen:\n            return [seen[diff], i]\n        seen[num] = i\n    return []`
        },
        timeComplexity: "O(N)",
        spaceComplexity: "O(N)",
        description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
        inputExample: "nums = [2,7,11,15], target = 9",
        outputExample: "[0, 1] (because nums[0] + nums[1] == 9)"
      },
      {
        id: "dsa-2",
        title: "Kadane's Algorithm - Maximum Subarray",
        difficulty: "Medium",
        companies: ["Amazon", "Flipkart", "Infosys", "Microsoft"],
        articleUrl: "https://leetcode.com/problems/maximum-subarray/",
        solutionCode: {
          cpp: `#include <vector>\n#include <algorithm>\n\nint maxSubArray(std::vector<int>& nums) {\n    int maxSum = nums[0], currSum = 0;\n    for (int x : nums) {\n        currSum = std::max(x, currSum + x);\n        maxSum = std::max(maxSum, currSum);\n    }\n    return maxSum;\n}`,
          java: `class Solution {\n    public int maxSubArray(int[] nums) {\n        int maxSum = nums[0], currSum = 0;\n        for (int num : nums) {\n            currSum = Math.max(num, currSum + num);\n            maxSum = Math.max(maxSum, currSum);\n        }\n        return maxSum;\n    }\n}`,
          python: `def maxSubArray(nums: list[int]) -> int:\n    max_sum = nums[0]\n    curr_sum = 0\n    for n in nums:\n        curr_sum = max(n, curr_sum + n)\n        max_sum = max(max_sum, curr_sum)\n    return max_sum`
        },
        timeComplexity: "O(N)",
        spaceComplexity: "O(1)",
        description: "Find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
        inputExample: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        outputExample: "6 (Subarray: [4,-1,2,1])"
      },
      {
        id: "dsa-3",
        title: "Sort Colors (0s, 1s, and 2s) - Dutch National Flag",
        difficulty: "Medium",
        companies: ["TCS", "Wipro", "Amazon", "Paytm"],
        articleUrl: "https://leetcode.com/problems/sort-colors/",
        solutionCode: {
          cpp: `void sortColors(std::vector<int>& nums) {\n    int low = 0, mid = 0, high = nums.size() - 1;\n    while (mid <= high) {\n        if (nums[mid] == 0) std::swap(nums[low++], nums[mid++]);\n        else if (nums[mid] == 1) mid++;\n        else std::swap(nums[mid], nums[high--]);\n    }\n}`,
          java: `class Solution {\n    public void sortColors(int[] nums) {\n        int low = 0, mid = 0, high = nums.length - 1;\n        while (mid <= high) {\n            if (nums[mid] == 0) {\n                int t = nums[low]; nums[low++] = nums[mid]; nums[mid++] = t;\n            } else if (nums[mid] == 1) mid++;\n            else {\n                int t = nums[mid]; nums[mid] = nums[high]; nums[high--] = t;\n            }\n        }\n    }\n}`,
          python: `def sortColors(nums: list[int]) -> None:\n    low, mid, high = 0, 0, len(nums) - 1\n    while mid <= high:\n        if nums[mid] == 0:\n            nums[low], nums[mid] = nums[mid], nums[low]\n            low += 1; mid += 1\n        elif nums[mid] == 1:\n            mid += 1\n        else:\n            nums[mid], nums[high] = nums[high], nums[mid]\n            high -= 1`
        },
        timeComplexity: "O(N)",
        spaceComplexity: "O(1)",
        description: "Given an array nums with n objects colored red, white, or blue (0, 1, 2), sort them in-place so that objects of the same color are adjacent.",
        inputExample: "nums = [2,0,2,1,1,0]",
        outputExample: "[0,0,1,1,2,2]"
      }
    ]
  },
  {
    id: "sheet-strings",
    topic: "Strings & Hashing",
    iconName: "Type",
    description: "Anagams, Palindromes, Pattern Matching (KMP, Z-algorithm), String Manipulation.",
    totalProblems: 6,
    problems: [
      {
        id: "dsa-4",
        title: "Valid Anagram",
        difficulty: "Easy",
        companies: ["Google", "Amazon", "Infosys"],
        articleUrl: "https://leetcode.com/problems/valid-anagram/",
        solutionCode: {
          cpp: `#include <string>\n#include <vector>\n\nbool isAnagram(std::string s, std::string t) {\n    if (s.length() != t.length()) return false;\n    std::vector<int> count(26, 0);\n    for (int i = 0; i < s.length(); i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int c : count) if (c != 0) return false;\n    return true;\n}`,
          java: `class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] freq = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            freq[s.charAt(i) - 'a']++;\n            freq[t.charAt(i) - 'a']--;\n        }\n        for (int c : freq) if (c != 0) return false;\n        return true;\n    }\n}`,
          python: `def isAnagram(s: str, t: str) -> bool:\n    if len(s) != len(t): return False\n    counts = {}\n    for char in s:\n        counts[char] = counts.get(char, 0) + 1\n    for char in t:\n        if char not in counts or counts[char] == 0:\n            return False\n        counts[char] -= 1\n    return True`
        },
        timeComplexity: "O(N)",
        spaceComplexity: "O(1)",
        description: "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.",
        inputExample: "s = 'anagram', t = 'nagaram'",
        outputExample: "true"
      },
      {
        id: "dsa-5",
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        companies: ["Amazon", "Meta", "Adobe"],
        articleUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        solutionCode: {
          cpp: `#include <string>\n#include <vector>\n#include <algorithm>\n\nint lengthOfLongestSubstring(std::string s) {\n    std::vector<int> lastPos(256, -1);\n    int maxLen = 0, start = 0;\n    for (int i = 0; i < s.length(); i++) {\n        if (lastPos[s[i]] >= start) start = lastPos[s[i]] + 1;\n        lastPos[s[i]] = i;\n        maxLen = std::max(maxLen, i - start + 1);\n    }\n    return maxLen;\n}`,
          java: `import java.util.HashMap;\n\nclass Solution {\n    public int lengthOfLongestSubstring(String s) {\n        HashMap<Character, Integer> map = new HashMap<>();\n        int maxLen = 0, left = 0;\n        for (int right = 0; right < s.length(); right++) {\n            char c = s.charAt(right);\n            if (map.containsKey(c)) {\n                left = Math.max(left, map.get(c) + 1);\n            }\n            map.put(c, right);\n            maxLen = Math.max(maxLen, right - left + 1);\n        }\n        return maxLen;\n    }\n}`,
          python: `def lengthOfLongestSubstring(s: str) -> int:\n    char_map = {}\n    left = 0\n    max_len = 0\n    for right, char in enumerate(s):\n        if char in char_map and char_map[char] >= left:\n            left = char_map[char] + 1\n        char_map[char] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len`
        },
        timeComplexity: "O(N)",
        spaceComplexity: "O(min(N, M))",
        description: "Given a string `s`, find the length of the longest substring without repeating characters.",
        inputExample: "s = 'abcabcbb'",
        outputExample: "3 (Substring 'abc')"
      }
    ]
  },
  {
    id: "sheet-linkedlists",
    topic: "Linked Lists",
    iconName: "GitCommit",
    description: "Singly Linked List, Doubly Linked List, Cycle Detection, Reversal, Intersection.",
    totalProblems: 6,
    problems: [
      {
        id: "dsa-6",
        title: "Reverse a Linked List",
        difficulty: "Easy",
        companies: ["Microsoft", "Google", "Amazon", "TCS"],
        articleUrl: "https://leetcode.com/problems/reverse-linked-list/",
        solutionCode: {
          cpp: `ListNode* reverseList(ListNode* head) {\n    ListNode *prev = nullptr, *curr = head;\n    while (curr != nullptr) {\n        ListNode* nextTemp = curr->next;\n        curr->next = prev;\n        prev = curr;\n        curr = nextTemp;\n    }\n    return prev;\n}`,
          java: `class Solution {\n    public ListNode reverseList(ListNode head) {\n        ListNode prev = null, curr = head;\n        while (curr != null) {\n            ListNode nextTemp = curr.next;\n            curr.next = prev;\n            prev = curr;\n            curr = nextTemp;\n        }\n        return prev;\n    }\n}`,
          python: `def reverseList(head: Optional[ListNode]) -> Optional[ListNode]:\n    prev, curr = None, head\n    while curr:\n        nxt = curr.next\n        curr.next = prev\n        prev = curr\n        curr = nxt\n    return prev`
        },
        timeComplexity: "O(N)",
        spaceComplexity: "O(1)",
        description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
        inputExample: "head = [1,2,3,4,5]",
        outputExample: "[5,4,3,2,1]"
      },
      {
        id: "dsa-7",
        title: "Detect Cycle in Linked List (Floyd's Tortoise & Hare)",
        difficulty: "Easy",
        companies: ["Amazon", "Oracle", "Cisco"],
        articleUrl: "https://leetcode.com/problems/linked-list-cycle/",
        solutionCode: {
          cpp: `bool hasCycle(ListNode *head) {\n    ListNode *slow = head, *fast = head;\n    while (fast && fast->next) {\n        slow = slow->next;\n        fast = fast->next->next;\n        if (slow == fast) return true;\n    }\n    return false;\n}`,
          java: `public boolean hasCycle(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow == fast) return true;\n    }\n    return false;\n}`,
          python: `def hasCycle(head: Optional[ListNode]) -> bool:\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast:\n            return True\n    return False`
        },
        timeComplexity: "O(N)",
        spaceComplexity: "O(1)",
        description: "Determine if the linked list has a cycle in it using Floyd's Cycle Finding Algorithm.",
        inputExample: "head = [3,2,0,-4], pos = 1",
        outputExample: "true (tail connects to node index 1)"
      }
    ]
  },
  {
    id: "sheet-trees-graphs",
    topic: "Trees & Graphs",
    iconName: "Network",
    description: "Binary Search Trees, Traversals (DFS/BFS), Topological Sort, Dijkstra algorithm.",
    totalProblems: 8,
    problems: [
      {
        id: "dsa-8",
        title: "Lowest Common Ancestor of Binary Tree",
        difficulty: "Medium",
        companies: ["Google", "Amazon", "Microsoft"],
        articleUrl: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
        solutionCode: {
          cpp: `TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n    if (!root || root == p || root == q) return root;\n    TreeNode* left = lowestCommonAncestor(root->left, p, q);\n    TreeNode* right = lowestCommonAncestor(root->right, p, q);\n    if (left && right) return root;\n    return left ? left : right;\n}`,
          java: `public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n    if (root == null || root == p || root == q) return root;\n    TreeNode left = lowestCommonAncestor(root.left, p, q);\n    TreeNode right = lowestCommonAncestor(root.right, p, q);\n    if (left != null && right != null) return root;\n    return left != null ? left : right;\n}`,
          python: `def lowestCommonAncestor(root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n    if not root or root == p or root == q:\n        return root\n    left = lowestCommonAncestor(root.left, p, q)\n    right = lowestCommonAncestor(root.right, p, q)\n    if left and right: return root\n    return left or right`
        },
        timeComplexity: "O(N)",
        spaceComplexity: "O(H)",
        description: "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes p and q.",
        inputExample: "root = [3,5,1,6,2,0,8], p = 5, q = 1",
        outputExample: "3"
      }
    ]
  },
  {
    id: "sheet-dp",
    topic: "Dynamic Programming",
    iconName: "Cpu",
    description: "0/1 Knapsack, Longest Common Subsequence, Coin Change, Edit Distance.",
    totalProblems: 7,
    problems: [
      {
        id: "dsa-9",
        title: "Coin Change Problem",
        difficulty: "Medium",
        companies: ["Amazon", "Uber", "Goldman Sachs"],
        articleUrl: "https://leetcode.com/problems/coin-change/",
        solutionCode: {
          cpp: `#include <vector>\n#include <algorithm>\n\nint coinChange(std::vector<int>& coins, int amount) {\n    std::vector<int> dp(amount + 1, amount + 1);\n    dp[0] = 0;\n    for (int i = 1; i <= amount; i++) {\n        for (int coin : coins) {\n            if (i >= coin) dp[i] = std::min(dp[i], 1 + dp[i - coin]);\n        }\n    }\n    return dp[amount] > amount ? -1 : dp[amount];\n}`,
          java: `import java.util.Arrays;\n\nclass Solution {\n    public int coinChange(int[] coins, int amount) {\n        int[] dp = new int[amount + 1];\n        Arrays.fill(dp, amount + 1);\n        dp[0] = 0;\n        for (int i = 1; i <= amount; i++) {\n            for (int coin : coins) {\n                if (i >= coin) dp[i] = Math.min(dp[i], 1 + dp[i - coin]);\n            }\n        }\n        return dp[amount] > amount ? -1 : dp[amount];\n    }\n}`,
          python: `def coinChange(coins: list[int], amount: int) -> int:\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for i in range(1, amount + 1):\n        for coin in coins:\n            if i >= coin:\n                dp[i] = min(dp[i], 1 + dp[i - coin])\n    return dp[amount] if dp[amount] != float('inf') else -1`
        },
        timeComplexity: "O(amount * N)",
        spaceComplexity: "O(amount)",
        description: "Given coins of different denominations and a total amount, return the fewest number of coins needed to make up that amount.",
        inputExample: "coins = [1,2,5], amount = 11",
        outputExample: "3 (5 + 5 + 1)"
      }
    ]
  }
];
