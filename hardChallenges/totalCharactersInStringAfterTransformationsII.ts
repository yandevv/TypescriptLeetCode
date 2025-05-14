// First Approach - Math method using matrix multiplication and matrix exponentiation with squaring
// to calculate the length of the string after t transformations, using a 26x26 matrix to represent
// the transformation rules for each character in the string. (Editorial - https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/editorial/?envType=daily-question&envId=2025-05-14)
const MOD = BigInt(1e9 + 7);
const L = 26;

class Mat {
  a: bigint[][];

  constructor(copyFrom: Mat | null = null) {
    this.a = Array.from({ length: L }, () => new Array(L).fill(0n));
    if(copyFrom) {
      for(let i = 0; i < L; i++) {
        for(let j = 0; j < L; j++) {
          this.a[i][j] = copyFrom.a[i][j];
        }
      }
    }
  }

  mul(other: Mat): Mat {
    const result = new Mat();
    for(let i = 0; i < L; i++) {
      for(let j = 0; j < L; j++) {
        for(let k = 0; k < L; k++) {
          result.a[i][j] =
            (result.a[i][j] + this.a[i][k] * other.a[k][j]) % MOD;
        }
      }
    }

    return result;
  }
}

/* identity matrix */
function I(): Mat {
  const m = new Mat();
  for (let i = 0; i < L; i++) {
    m.a[i][i] = 1n;
  }
  return m;
}

/* matrix exponentiation by squaring */
function quickMul(x: Mat, y: number): Mat {
  let ans = I();
  let cur = new Mat(x);
  while(y > 0) {
    if(y & 1) {
      ans = ans.mul(cur);
    }
    cur = cur.mul(cur);
    y >>= 1;
  }
  return ans;
}

function lengthAfterTransformations(s: string, t: number, nums: number[]): number {
  const T = new Mat();
  for(let i = 0; i < L; i++) {
    for(let j = 1; j <= nums[i]; j++) {
      T.a[(i + j) % L][i] = 1n;
    }
  }

  const res = quickMul(T, t);
  const f = new Array(L).fill(0n);
  for(const ch of s) {
    f[ch.charCodeAt(0) - "a".charCodeAt(0)] += 1n;
  }

  let ans = 0n;
  for(let i = 0; i < L; i++) {
    for(let j = 0; j < L; j++) {
      ans = (ans + res.a[i][j] * f[j]) % MOD;
    }
  }

  return Number(ans);
}

const case1 = lengthAfterTransformations("abcyy", 2, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]);
const case2 = lengthAfterTransformations("azbk", 1, [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]);

console.log(`case1: ${case1} // ${case1 === 7}`);
console.log(`case2: ${case2} // ${case2 === 8}`);