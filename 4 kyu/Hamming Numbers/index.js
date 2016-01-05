// Source : http://www.codewars.com/kata/526d84b98f428f14a60008da
// Author : Han Zichi
// Date   : 2016-01-05

// 丑数
function hamming (n) {
  // TODO: Program me
  var dp = [], a, b, c;
  dp[0] = 1, a = b = c = 0;

  for (var i = 1; i < n; i++) {
    dp[i] = Math.min(dp[a] * 2, dp[b] * 3, dp[c] * 5);
    if (dp[i] === dp[a] * 2) a++;
    if (dp[i] === dp[b] * 3) b++;
    if (dp[i] === dp[c] * 5) c++;
  }  

  return dp[n - 1];
}