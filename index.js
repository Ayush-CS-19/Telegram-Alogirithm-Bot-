const { Telegraf } = require('telegraf');
const algo = require('./algoritm');
const { message } = require('telegraf/filters');
require("dotenv").config();
//THIS IS THE API KEY
const bot = new Telegraf(process.env.BOT_TOKEN);
try{ 
bot.start((ctx) =>  ctx.reply('Welcome to Algorithm\'s Algo Bot.Use /commands'));
bot.command('commands', (ctx) => 
    ctx.reply(
        'Here are the available commands:\n\n' +
        '/binarysearch - Binary Search Algorithm\n' +
        '/bubblesort - Bubble Sort Algorithm\n' +
        '/insertionsort - Insertion Sort Algorithm\n' +
        '/mergesort - Merge Sort Algorithm\n' +
        '/quicksort - Quick Sort Algorithm\n' +
        '/fibonacci_recursive - Fibonacci (Recursive) Algorithm\n' +
        '/fibonacci_iterative - Fibonacci (Iterative) Algorithm\n' +
        '/dfs - Depth-First Search Algorithm\n' +
        '/bfs - Breadth-First Search Algorithm\n' +
        '/dijkstra - Dijkstra\'s Shortest Path Algorithm\n' +
        '\nType any of these commands to get the algorithm!'
    )
);
// CUSTOM COMMANDS
bot.command('binarysearch', (ctx) => 
    ctx.reply('**Binary Search**:\n' +
        'An efficient algorithm to find an element\'s position in a sorted array. ' +
        'It works by repeatedly dividing the search interval in half.\n' + algo.binarySearch)
);

bot.command('bubblesort', (ctx) => 
    ctx.reply('**Bubble Sort**:\n' +
        'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.\n' + algo.bubbleSort)
);

bot.command('insertionsort', (ctx) => 
    ctx.reply('**Insertion Sort**:\n' +
        'A simple sorting algorithm that builds the final sorted array one item at a time. ' +
        'It is much less efficient on large lists compared to more advanced algorithms.\n' + algo.insertionSort)
);

bot.command('mergesort', (ctx) => 
    ctx.reply('**Merge Sort**:\n' +
        'A divide-and-conquer algorithm that divides the input array into halves, recursively sorts them, and then merges the sorted halves.\n' + algo.mergeSort)
);

bot.command('quicksort', (ctx) => 
    ctx.reply('**Quick Sort**:\n' +
        'An efficient sorting algorithm that uses a pivot element to partition the array into two halves, then sorts each half recursively.\n' + algo.quickSort)
);

bot.command('fibonacci_recursive', (ctx) => 
    ctx.reply('**Fibonacci Sequence (Recursive)**:\n' +
        'Calculates the nth Fibonacci number using a recursive approach. ' +
        'This approach is simple but may not be efficient for large inputs.\n' + algo.fibonacciRecursive)
);

bot.command('fibonacci_iterative', (ctx) => 
    ctx.reply('**Fibonacci Sequence (Iterative)**:\n' +
        'Calculates the nth Fibonacci number using a loop. ' +
        'This approach is more efficient than the recursive method.\n' + algo.fibonacciIterative)
);

bot.command('dfs', (ctx) => 
    ctx.reply('**Depth-First Search (DFS)**:\n' +
        'A graph traversal algorithm that explores as far as possible along each branch before backtracking. ' +
        'It is implemented using recursion or a stack.\n' + algo.depthFirstSearch)
);

bot.command('bfs', (ctx) => 
    ctx.reply('**Breadth-First Search (BFS)**:\n' +
        'A graph traversal algorithm that explores all neighbors of a node before moving to the next level. ' +
        'It is implemented using a queue.\n' + algo.breadthFirstSearch)
);

bot.command('dijkstra', (ctx) => 
    ctx.reply('**Dijkstra\'s Algorithm**:\n' +
        'An algorithm for finding the shortest paths between nodes in a weighted graph. ' +
        'It is widely used in network routing and pathfinding.\n' + algo.dijkstra)
);
bot.on('sticker', (ctx) => ctx.reply('❤️'));
bot.on('text', (ctx) => ctx.reply('I don\'t understand Humans'));

// IF THIS COMMAND IS USED IN PRIVATE CHAT THIS DO NOT WORK
bot.command('quit',async(ctx) =>{
    await ctx.telegram.leaveChat(ctx.message.chat.id);
    await ctx.leaveChat();
});
}
catch{
    console.log("Unexpected Error");
}
bot.launch();