# CSCI 5117 Spring 2023 -- Module 2 Homework


Instructions can be [found on canvas](https://canvas.umn.edu/courses/355584/pages/homework-2)

Please fill out all of the following sections to help us grade your submission:

## Student (to be completed individually)

* Andrew Owens, owens518@umn.edu

## Link to Site

<https://ohwhattodo.netlify.app/>

## Notes
* The authentication was implemented with NextAuth.js, I had started the assignment and implemented authentication before the authentication model was announced in class.
I spoke with the professor and he ok'd NextAuth. NextAuth also uses JWT encryption.
* [NextAuth](https://next-auth.js.org/getting-started/introduction)

### NextAuth.js
```
...
pageProps: { session, ...pageProps },
...

function MyApp({ Component, pageProps }) {
    return (
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    );
}
```
### Clerk
```
function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps} >
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
```
## Challenge Task

* I started the challenge task: [yes]
* I completed the challenge task: [no]

## Sources Used

* The backend CRUD functions were taken from the Codehooks documentation/tutorial for CRUD implementation: <https://codehooks.io/docs/examples/crud-example>
* The custom checkbox was taken from Tailwind documentation: <https://www.material-tailwind.com/docs/html/checkbox>