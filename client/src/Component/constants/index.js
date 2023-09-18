import { code1, blogimg1 } from "../../Assets/images/index.js";

export const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/blog", label: "Blogs" },
  { href: "/post", label: "Write" },
  { href: "/Edit", label: "Edit" },
];

export const CardData = [
  {
    id: "How-to-export-a-module-in-Javascript",
    content: `JavaScript, like most programming languages, was initially used for small tasks. But as its popularity grew, so did the amount of code that needed to be written.

    Having a large amount of code in a single file can be problematic, so it's helpful to split the code into multiple parts. This is where modules come in handy.
    
    What is a Module?
    JavaScript modules are a way to organize and structure code. They allow developers to break their code into smaller, reusable pieces. You can think about them as smaller pieces of code that you can import and export between different parts of an application.
    
    Throughout this article, we'll go through how use modules in your program and the best ways to do it.
    
    But first, let's talk about some more reasons to use modules.
    
    The Benefits of Using Modules
    Your code will still run if you put it all in the same file. But you might be causing some problems for yourself. Let's talk about some benefits of using modules in your program.
    
    More Organized Code
    Using modules in your application makes everything well-sorted and arranged. It also makes your work easier to understand for anyone that wants to go through your code.
    
    You probably wouldn't be excited to find a variable called "username" on line 431 or to need to start renaming a variable or function name everywhere it is used in an application.
    
    Code Reusability
    By breaking down your code into smaller, modular components, you can easily reuse those components in other parts of your application or in entirely new applications.
    
    This can save you a lot of time and effort, as you don't have to rewrite the same code over and over again.
    
    Also, if you make changes to a module, those changes will be reflected everywhere that module is used, making it easier to maintain and update your codebase.
    
    No Naming Conflicts
    Using JavaScript modules helps you avoid naming conflicts. When working on a large project, it's common for developers to write multiple functions and variables with the same name. This can lead to naming conflicts where two or more pieces of code have the same name, causing unexpected behavior and errors. With modules, you don't have this problem.
    
    How to Use Modules in JavaScript
    How to Define a Module
    Here is the basic way to define a module. Imagine 2 files names, main.js and generate.js.
    
    Here's main.js:
    
    let name = "Muhammad Ali"
    And here's generate.js:
    
    function generateUserCertificate(userName, date): 
        # generate user certificate. 
    const myName = name
    generateUserCertificate(myName, "2023-09-04")
    To use the "name" variable inside the generate.js file, you need to export it from the main.js file and import it into the generate.js file.
    
    There are a lot of techniques you can use to import and export files.
    
    We'll go through them one by one.
    
    Types of File Exports in JavaScript
    Default Exports
    Here's how to perform a default export in a JavaScript file:
    
    function getAllUser():
    
    export default getAllUser
    Note that you can only use one default export in a JavaScript file. You can also export before the declaration, like this:
    
    export default function getAllUser():
    This is easier to read, right?
    
    Named Exports
    Named exports allow you to share multiple modules from a file, unlike default exports which can only have one in a file.
    
    You won't need to use the "default" syntax when using named exports. Named exports also need to be enclosed in curly brackets if you are exporting more than one module.
    
    Here's an example:
    
    const name = "Muhammad Ali"
    
    export name;
    You can also export before the declaration. Here's how to do that:
    
    export function sayHi(user) {
     
    }
    
    export function sayHello(user) {
      
    }
    You can also export multiple variables, functions, or classes using named exports in a single statement. Here's an example:
    
    const name = "Muhammad Alli"
    
    function sayHello(user) {
   
    }
    
    export {name, sayHello};
    Note: It is possible to have both default and named export in a module.
    
    const age = 404;
    
    const name = "Muhammad Alli"
    
    export default function sayHello(user) {
     
    }
    
    export {age, name};
    How to Rename Exports
    It's also possible to rename your modules before exporting them. Here's how you'd do that:
    
    export function sayHello(user) {
      
    }
    
    export { sayHello as greet };
    How to Import Modules
    How to Import a Single Default Export
    Here is how to import a default export:
    
    import getAllUser from "getuser.js";
    That's all – you can then proceed to use the getAllUser function anywhere in that file.
    
    How to Import a Single Named Export
    Here is how to import a single named export.
    
    import {name} from "username.js"
    How to Import Multiple Named Exports
    Here is how to export multiple named exports.
    
     import {name, sayHello} from 'user.js'
    How to Rename Imports
    You can also rename exports before using them in a JavaScript file. Here's how to do it:
    
    import {userName as name, greet as sayHello} from 'user.js'
    It basically imports the name and 1sayHello1 module and renames them, so you can only make reference to "userName" and "greet" in this current module.
    
    How to Import an Entire Module
    What if there are a lot of modules to import and it's a waste of time to create a single line of named exports for them? Then you can export them this way:
    
    import * as User from 'user.js'
    Here is how you can use it in the module exported to:
    
    import * as User from 'user.js'
    
    User.name
    User.sayHi
    Conclusion
    Modules are a powerful feature in JavaScript that allow developers to organize and structure their code for improved readability and reusability. They also help you avoid naming conflicts.
    
    By breaking down large codebases into smaller, manageable modules, developers can write more efficient and maintainable code.
    
    This article has covered the basics of defining, exporting, and importing modules in JavaScript, including default exports, named exports, renaming exports, and importing entire modules.
    
    By mastering the use of modules, you can take your JavaScript programming skills to the next level and write more efficient and scalable code.
    
    You can share your thoughts with me on Twitter here.
    
    Happy coding! ^-^`,
    author_imgURL: code1,
    label: "How to export a module in Javascript?",
    author: "Saket Allahabadia",
    description:
      "Websites are now an essential tool for every business. And if you are a web developer and need to find new material or resources, then this is the place for you. As a developer, it is not easy to find a website that can",
    category: "Javascript",
    date: "28 August (3 days ago)",
    blog_imgURL: blogimg1,
    tags: [
      {
        label: "Kubernetes",
        category: "Devops",
        url: "/kubernetes",
      },
      {
        label: "Serverless Computing",
        category: "Devops",
        url: "/serverless",
      },
    ],
  },
  {
    author_imgURL: code1,
    label: "Introduction to React Hooks",
    author: "Saket Allahabadia",
    description:
      "Websites are now an essential tool for every business. And if you are a web developer and need to find new material or resources, then this is the place for you. As a developer, it is not easy to find a website that can",
    category: "React",
    date: "15 September (1 day ago)",
    blog_imgURL: blogimg1,
    tags: [
      {
        label: "React",
        category: "Devops",
        url: "/kubernetes",
      },
      {
        label: "Hooks",
        category: "Devops",
        url: "/serverless",
      },
    ],
  },
  {
    author_imgURL: code1,
    label: "How to export a module in Javascript?",
    author: "Saket Allahabadia",
    description:
      "Websites are now an essential tool for every business. And if you are a web developer and need to find new material or resources, then this is the place for you. As a developer, it is not easy to find a website that can",
    category: "Javascript",
    date: "28 August (3 days ago)",
    blog_imgURL: blogimg1,
    tags: [
      {
        label: "Kubernetes",
        category: "Devops",
        url: "/kubernetes",
      },
      {
        label: "Serverless Computing",
        category: "Devops",
        url: "/serverless",
      },
    ],
  },
  {
    author_imgURL: code1,
    label: "Introduction to React Hooks",
    author: "Saket Allahabadia",
    description:
      "Websites are now an essential tool for every business. And if you are a web developer and need to find new material or resources, then this is the place for you. As a developer, it is not easy to find a website that can",
    category: "React",
    date: "15 September (1 day ago)",
    blog_imgURL: blogimg1,
    tags: [
      {
        label: "React",
        category: "Devops",
        url: "/kubernetes",
      },
      {
        label: "Hooks",
        category: "Devops",
        url: "/serverless",
      },
    ],
  },
  {
    author_imgURL: code1,
    label: "How to export a module in Javascript?",
    author: "Saket Allahabadia",
    description:
      "Websites are now an essential tool for every business. And if you are a web developer and need to find new material or resources, then this is the place for you. As a developer, it is not easy to find a website that can",
    category: "Javascript",
    date: "28 August (3 days ago)",
    blog_imgURL: blogimg1,
    tags: [
      {
        label: "Kubernetes",
        category: "Devops",
        url: "/kubernetes",
      },
      {
        label: "Serverless Computing",
        category: "Devops",
        url: "/serverless",
      },
    ],
  },
  {
    author_imgURL: code1,
    label: "Introduction to React Hooks",
    author: "Saket Allahabadia",
    description:
      "Websites are now an essential tool for every business. And if you are a web developer and need to find new material or resources, then this is the place for you. As a developer, it is not easy to find a website that can",
    category: "React",
    date: "15 September (1 day ago)",
    blog_imgURL: blogimg1,
    tags: [
      {
        label: "React",
        category: "Devops",
        url: "/kubernetes",
      },
      {
        label: "Hooks",
        category: "Devops",
        url: "/serverless",
      },
    ],
  },
  {
    author_imgURL: code1,
    label: "How to export a module in Javascript?",
    author: "Saket Allahabadia",
    description:
      "Websites are now an essential tool for every business. And if you are a web developer and need to find new material or resources, then this is the place for you. As a developer, it is not easy to find a website that can",
    category: "Javascript",
    date: "28 August (3 days ago)",
    blog_imgURL: blogimg1,
    tags: [
      {
        label: "Kubernetes",
        category: "Devops",
        url: "/kubernetes",
      },
      {
        label: "Serverless Computing",
        category: "Devops",
        url: "/serverless",
      },
    ],
  },
  {
    author_imgURL: code1,
    label: "Introduction to React Hooks",
    author: "Saket Allahabadia",
    description:
      "Websites are now an essential tool for every business. And if you are a web developer and need to find new material or resources, then this is the place for you. As a developer, it is not easy to find a website that can",
    category: "React",
    date: "15 September (1 day ago)",
    blog_imgURL: blogimg1,
    tags: [
      {
        label: "React",
        category: "Devops",
        url: "/kubernetes",
      },
      {
        label: "Hooks",
        category: "Devops",
        url: "/serverless",
      },
    ],
  },
  {
    // id: "How-to-export-a-module-in-Javascript?",
    author_imgURL: code1,
    label: "How to export a module in Javascript?",
    author: "Saket Allahabadia",
    description:
      "Websites are now an essential tool for every business. And if you are a web developer and need to find new material or resources, then this is the place for you. As a developer, it is not easy to find a website that can",
    category: "Javascript",
    date: "28 August (3 days ago)",
    blog_imgURL: blogimg1,
    tags: [
      {
        label: "Kubernetes",
        category: "Devops",
        url: "/kubernetes",
      },
      {
        label: "Serverless Computing",
        category: "Devops",
        url: "/serverless",
      },
    ],
  },
  {
    id: "Introduction-to-React-Hooks",
    content: `React.js is an open-source JavaScript-based user interface library. It is hugely popular for web and mobile app development.

    React follows the principle of component-based architecture. A component in React is an isolated and reusable piece of code. The components can be of two types – class components and functional components.
    
    Before React version 16.8, developers could handle state and other React features only using class components. But with version 16.8, React introduced a new pattern called Hooks.
    
    With React Hooks, we can use state, and other React features, in a functional component. It empowers devs to do functional programming in React.
    
    In this article, we will learn the fundamentals of React Hooks. The motivation behind writing this piece is to encourage beginners to think that "React Hooks are easy to learn, create, and use". Yes, that's true as long as you understand them fundamentally.
    
    If you like to learn from video content as well, this article is also available as a video tutorial here: 🙂
    
    
    Before You Learn About Hooks...
    Before you think of hooks, think of plain-old (aka vanilla) JavaScript functions.
    
    In the JavaScript programming language, functions are reusable code logic to perform repeated tasks. Functions are composable. This means you can invoke a function in another function and use its output.
    
    In the image below, the someFunction() function composes (uses) functions a() and b(). The b() function uses the function c().
    
    image-13
    Function Composability
    If we write this in code, it will be like this:
    
    function a() {
        // some code
    }
    
    function c() {
        // some code
    }
    
    function b() {
        // some code
        
        c();
        
        // some code
    }
    
    function someFunction() {
        // some code
        
      a();
        b();
        
        // some code
    }
    It is not a secret that functional components in React are just plain old JavaScript functions! So if functions have composability, React components can also have composability. This means we can use (compose) one or more components into another component as shown in the image below:
    
    image-14
    Components Composability
    Stateful vs. Stateless Components
    Components in React can be stateful or stateless.
    
    A stateful component declares and manages local state in it.
    A stateless component is a pure function that doesn't have a local state and side-effects to manage.
    A pure function is a function without any side-effects. This means that a function always returns the same output for the same input.
    
    If we take out the stateful and side-effects logic from a functional component, we have a stateless component. Also, the stateful and side-effects logic can be reusable elsewhere in the app. So it makes sense to isolate them from a component as much as possible.
    
    image-15
    Stateful Component as the component has Stateful Logic
    React Hooks and Stateful Logic
    With React Hooks, we can isolate stateful logic and side-effects from a functional component. Hooks are JavaScript functions that manage the state's behaviour and side effects by isolating them from a component.
    
    So, we can now isolate all the stateful logic in hooks and use (compose them, as hooks are functions, too) into the components.
    
    image-16
    Isolated Stateful Logic into Hooks
    The question is, what is this stateful logic? It can be anything that needs to declare and manage a state variable locally.
    
    For example, the logic to fetch data and manage the data in a local variable is stateful. We may also want to reuse the fetching logic in multiple components.
    
    image-17
    So, What Exactly Are React Hooks?
    So, how can we define React Hooks in plain English? Now that we understand functions, composability, components, states, and side-effects, here goes a definition of React Hooks:
    
    React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.
    React provides a bunch of standard in-built hooks:
    
    useState: To manage states. Returns a stateful value and an updater function to update it.
    useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
    useContext: To return the current value for a context.
    useReducer: A useState alternative to help with complex state management.
    useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
    useMemo: It returns a memoized value that helps in performance optimizations.
    useRef: It returns a ref object with a .current property. The ref object is mutable. It is mainly used to access a child component imperatively.
    useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
    useDebugValue: Helps to display a label in React DevTools for custom hooks.
    You can read about these hooks in more detail from here. Please notice that each of these hook names start with use. Yes, this is a standard practice to identify a hook in the React codebase quickly.
    
    We can also create custom hooks for our unique use cases like data fetching, logging to disk, timers, and many more.
    
    So next time, if you encounter React Hooks in a codebase or are asked to write one, take it easy. It is just another JavaScript function to deal with state and side-effects outside of functional components.
    
    If you are looking for a step-by-step guide to design and create a custom hook, you may find this article helpful.
    
    Before We End...
    I hope you found the introduction to React Hooks helpful. After spending many years with React, I have started a YouTube video series that aims to cover all the aspects of React end to end. Please subscribe if you find it helpful.
    
    Let's connect. I share my learnings on JavaScript, Web Development, and Blogging on these platforms as well:
    
    Follow me on Twitter
    Side projects on GitHub
    React.JS Community on Showwcase
    See you soon with my next article. Until then, please take care of yourself, and stay happy.
    
    `,
    author_imgURL: code1,
    label: "Introduction to React Hooks",
    author: "Saket Allahabadia",
    description:
      "Websites are now an essential tool for every business. And if you are a web developer and need to find new material or resources, then this is the place for you. As a developer, it is not easy to find a website that can",
    category: "React",
    date: "15 September (1 day ago)",
    blog_imgURL: blogimg1,
    tags: [
      {
        label: "React",
        category: "Devops",
        url: "/kubernetes",
      },
      {
        label: "Hooks",
        category: "Devops",
        url: "/serverless",
      },
    ],
  },
];





export const TagData = [
  {
    label: "Kubernetes",
    category: "Devops",
    url: "/kubernetes",
  },
  {
    label: "Continuous Integration",
    category: "Devops",
    url: "/ci",
  },
  {
    label: "Containerization",
    category: "Devops",
    url: "/containerization",
  },
  {
    label: "Ansible",
    category: "Devops",
    url: "/ansible",
  },
  {
    label: "Jenkins",
    category: "Devops",
    url: "/jenkins",
  },
  {
    label: "GitLab",
    category: "Devops",
    url: "/gitlab",
  },
  {
    label: "Infrastructure as Code",
    category: "Devops",
    url: "/iac",
  },
  {
    label: "Docker Compose",
    category: "Devops",
    url: "/docker-compose",
  },
  {
    label: "Serverless Computing",
    category: "Devops",
    url: "/serverless",
  },
  {
    label: "Monitoring and Logging",
    category: "Devops",
    url: "/monitoring-logging",
  },
];

export const shareData = [
  {
    name: "github",
    link: "https://www.linkedin.com/in/ashwin-maurya/",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/ashwin-maurya/",
  },
  {
    name: "facebook",
    link: "https://www.linkedin.com/in/ashwin-maurya/",
  },
  {
    name: "twitter",
    link: "https://www.linkedin.com/in/ashwin-maurya/",
  },
];

export const cardData = [
  {

  }



]