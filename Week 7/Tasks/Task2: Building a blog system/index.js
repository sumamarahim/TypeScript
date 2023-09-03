/**

 * Task 2: Building a Blog System
-> Imagine you're developing a TypeScript application for
 a blogging platform. Create the following types and interfaces:
->1:  Define an interface Author with properties like id,
 name, and bio. DONE
-> 2: Create a type Comment that represents an object
 with author (of type Author), content, and timestamp. DONE
-> 3: Define an interface Post with properties like
 id, title, content, author (of type Author), and an array
  of Comments.
-> Implement a function that sorts posts based
 on their number of comments.
 
 */
//  import chalk from "chalk"; // ES Module
//   const chalk = require("chalk")(); // Common JS
console.log("Task 2 : Building a blog System");
// let author: Author = {
//   id: 9,
//   name: "Dr. Prof. Sumama",
//   bio: "Sumama is an etreprenuer and business magnet",
// };
// type that represent an object
// type Comment = {
//   author: Author;
//   content: any[];
//   timestamp: number;
// };
// let comment: Comment = {
//   author: {
//     id: 10,
//     name: "Ali",
//     bio: "Ali is a blogger",
//   },
//   content: ["and", "ali", "great article"],
//   timestamp: 191958,
// };
// interface Post {
//   id: number;
//   title: string;
//   author: Author;
//   content: string;
//   comments: any[];
// }
// let post1: Post = {
//   id: 190,
//   title: "Why AI is important in healthcare?",
//   author: {
//     id: 18,
//     name: "Sumama",
//     bio: "Magnet",
//   },
//   content: "Recently my study show that AI is important in health sector..",
//   comments: ["Comment 1", "Comment 2", "Comment 3"],
// };
// let post2: Post = {
//   id: 220,
//   title: "Why AI is important in healthcare?",
//   author: {
//     id: 18,
//     name: "Sumama",
//     bio: "Magnet",
//   },
//   content: "Recently my study show that AI is important in health sector..",
//   comments: ["Comment 1", "Comment 2", "Comment 3", "Comment 4"],
// };
// let post3: Post = {
//   id: 405,
//   title: "Why AI is important in healthcare?",
//   author: {
//     id: 18,
//     name: "Sumama",
//     bio: "Magnet",
//   },
//   content: "Recently my study show that AI is important in health sector..",
//   comments: ["Comment 1", "Comment 2"],
// };
// let commentPush: any = post1.comments.push();
// // console.log(commentPush)
// let newPost = post1;
// post1 = newPost;
// post1 = {
//   id: 19999,
//   title: "New article",
//   author: {
//     id: 980000,
//     bio: "adklj sd",
//     name: "Salman",
//   },
//   content: "New hnads kjsdlf asdf",
//   comments: ["asdklj ", "asdjklj"],
// };
// newPost = post1;
// newPost = {
//   id: 9108,
//   content: "sdkf",
//   comments: ["sdf", "asdf "],
//   title: "SDKFJ DSKF SD",
//   author: {
//     id: 9999999,
//     name: "New Agent",
//     bio: "New at here no there but here or there .... ",
//   },
// };
// console.log("Post comment push: ", post1.comments);
function sortPosts() {
    //   console.log("Post title is: ", post.comments);
    //   console.log("Author: ", author.name);
    //   console.log(chalk.bgBlue.bold("Comments: "), post.comments.push());
}
sortPosts();
// let push in comment
// console.log(post.comments)
// console.log("Comment's Author ", comment.author, "Comment ", comment);
// =====================================================
// COPY AND PASTE
// =====================================================
function sortPostsByCommentCount(posts) {
    // Use the `sort` method to sort posts based on the number of comments in descending order.
    return posts.sort((postA, postB) => postB.comments.length - postA.comments.length);
}
// Example posts
const posts = [
    {
        id: 1,
        title: 'Post 1',
        content: 'Content of Post 1',
        author: { id: 1, name: 'Author 1', bio: 'Bio of Author 1' },
        comments: [
            { author: { id: 2, name: 'Author 2', bio: 'Bio of Author 2' }, content: 'Comment 1', timestamp: new Date() },
            { author: { id: 3, name: 'Author 3', bio: 'Bio of Author 3' }, content: 'Comment 2', timestamp: new Date() },
        ],
    },
    {
        id: 2,
        title: 'Post 2',
        content: 'Content of Post 2',
        author: { id: 2, name: 'Author 2', bio: 'Bio of Author 2' },
        comments: [{ author: { id: 1, name: 'Author 1', bio: 'Bio of Author 1' }, content: 'Comment 1', timestamp: new Date() }],
    },
];
const sortedPosts = sortPostsByCommentCount(posts);
// Now, `sortedPosts` will contain posts sorted by the number of comments in descending order.
console.log(sortedPosts);
export {};
