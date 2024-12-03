const binarySearch = `
const binarySearch = function search(arr, x) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] === x) return mid;
        else if (arr[mid] < x) low = mid + 1;
        else high = mid - 1;
    }
    return -1; // Not found
};
`;
const bubbleSort = `
const bubbleSort = function sort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};
`;
const insertionSort = `
const insertionSort = function sort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
};
`;
const mergeSort = `
const mergeSort = function sort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

const merge = function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
};
`;
const quickSort = `
const quickSort = function sort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = arr.filter((el) => el < pivot);
    const right = arr.filter((el) => el > pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
};
`;
const fibonacciRecursive = `
const fibonacci = function fib(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};
`;
const fibonacciIterative = `
const fibonacci = function fib(n) {
    const fibArr = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
    return fibArr[n];
};
`;
const depthFirstSearch = `
const dfs = function traverse(graph, start, visited = new Set()) {
    if (visited.has(start)) return;
    visited.add(start);
    console.log(start);
    graph[start].forEach((neighbor) => dfs(graph, neighbor, visited));
};
`;
const breadthFirstSearch = `
const bfs = function traverse(graph, start) {
    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
        const node = queue.shift();
        if (visited.has(node)) continue;

        visited.add(node);
        console.log(node);
        queue.push(...graph[node]);
    }
};
`;
const dijkstra = `
const dijkstra = function shortestPath(graph, start) {
    const distances = {};
    const visited = new Set();
    const pq = [[start, 0]];

    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;

    while (pq.length > 0) {
        const [currentNode, currentDistance] = pq.shift();

        if (visited.has(currentNode)) continue;
        visited.add(currentNode);

        for (let [neighbor, weight] of Object.entries(graph[currentNode])) {
            const distance = currentDistance + weight;
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                pq.push([neighbor, distance]);
            }
        }
    }
    return distances;
};
`;
module.exports = {binarySearch,bubbleSort,dijkstra,breadthFirstSearch,depthFirstSearch,fibonacciIterative,fibonacciRecursive,quickSort,mergeSort,insertionSort}