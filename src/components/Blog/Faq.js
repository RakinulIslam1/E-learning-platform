import React from 'react';

const Faq = () => {
    return (
      <div>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl font-semibold sm:text-4xl">
              Questions and Answer Blog
            </h2>
            <p className="mt-4 mb-8 dark:text-gray-400">
              Hello! Wellcome to our blog section, here we have four questions
              for you
            </p>
            <div className="space-y-4">
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  what is cors?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  CORS stands for Cross-Origin Resource Sharing . It allows us
                  to relax the security applied to an API. This is done by
                  bypassing the Access-Control-Allow-Origin headers, which
                  specify which origins can access the API.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  Why are you using firebase? What other options do you have to
                  implement authentication?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  Firebase Authentication provides backend services, easy-to-use
                  SDKs, and ready-made UI libraries to authenticate users to
                  your app. It supports authentication using passwords, phone
                  numbers, popular federated identity providers like Google,
                  Facebook and Twitter, and more.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  How does the private route work?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  The private route component is similar to the public route,
                  the only change is that redirect URL and authenticate
                  condition. If the user is not authenticated he will be
                  redirected to the login page and the user can only access the
                  authenticated routes If he is authenticated (Logged in).
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  What is Node? How does Node work?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  Node.js is a JavaScript runtime environment that achieves low
                  latency and high throughput by taking a “non-blocking”
                  approach to serving requests. In other words, Node.js wastes
                  no time or resources on waiting for I/O requests to return. In
                  the traditional approach to creating web servers, for each
                  incoming request or connection the server spawns a new thread
                  of execution or even forks a new process to handle the request
                  and send a response. Conceptually, this makes perfect sense,
                  but in practice it incurs a great deal of overhead. While
                  spawning threads incurs less memory and CPU overhead than
                  forking processes, it can still be inefficient. The presence
                  of a large number of threads can cause a heavily loaded system
                  to spend precious cycles on thread scheduling and context
                  switching, which adds latency and imposes limits on
                  scalability and throughput.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Faq;