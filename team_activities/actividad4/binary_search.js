var words = [
    "simplicity",
    "share",
    "major",
    "commemorate",
    "other",
    "sunrise",
    "orchestra",
    "banner",
    "compact",
    "second",
    "damn",
    "film",
    "pursuit",
    "help",
    "cancer",
    "trustee",
    "request",
    "freighter",
    "shy",
    "ghostwriter",
    "percent",
    "financial",
    "leftovers",
    "abridge",
    "flourish",
    "shadow",
    "precedent",
    "case",
    "fix",
    "compose",
    "prayer",
    "migration",
    "presidency",
    "tender",
    "troop",
    "warn",
    "uniform",
    "wine",
    "knock",
    "review",
    "waste",
    "fragrant",
    "dull",
    "criticism",
    "can",
    "student",
    "harmony",
    "leaflet",
    "franchise",
    "craft"
];
words = words.sort();
words = new Array("a");
var nums = [127, 190, 47, 107, 79, 42, 117, 10, 166, 227, 53, 198, 275, 182, 52, 89, 56, 259, 262, 249, 290, 132, 58, 299, 278, 85, 129, 269, 240, 222, 114, 140, 222, 13, 238, 150, 237, 297, 4, 285, 1, 219, 256, 241, 285, 166, 12, 57, 244, 259];
nums = [1];
nums = nums.sort();
function numBinarySearch(arr, query) {
    arr = arr.sort();
    var start = 0;
    var end = arr.length - 1;
    var middle = 0;
    if (start == end && arr[0] == query) {
        return 0;
    }
    while ((end - start) > 1) {
        middle = start + Math.floor((end - start) / 2);
        if (arr[middle] == query) {
            return middle;
        }
        else if (arr[middle] < query) {
            start = middle;
        }
        else {
            end = middle;
        }
    }
    return -1;
}
function strBinarySearch(arr, query) {
    arr = arr.sort();
    var start = 0;
    var end = arr.length - 1;
    var middle = 0;
    if (start == end && arr[0] == query) {
        return 0;
    }
    while ((end - start) > 1) {
        middle = start + Math.floor((end - start) / 2);
        if (arr[middle] == query) {
            return middle;
        }
        else if (arr[middle] < query) {
            start = middle;
        }
        else {
            end = middle;
        }
    }
    return -1;
}
console.log(nums);
console.log(words);
console.log(numBinarySearch(nums, 1));
console.log(strBinarySearch(words, "a"));
