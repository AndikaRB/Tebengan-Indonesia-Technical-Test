const uniqueNum = (nums) => {
  const hashMap = {}

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if (!hashMap[num]) {
      hashMap[num] = 1
    } else {
      hashMap[num] += 1
    }
  }

  for (key in hashMap) {
    if (hashMap[key] === 1) {
      return Number(key)
    }
  }
}

console.log(uniqueNum([5, 5, 5, 2, 5, 5]))
