import React from 'react';

const Blog = () => {
    return (
      <div>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
              How it works
            </p>
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
              <div>
                <h3 className="font-semibold">What Is Computer Programming?</h3>
                <p className="mt-1 dark:text-gray-400">
                  Computer programming is how engineers tell a computer,
                  application, or software program what to do. At the most basic
                  level, programming is the process of writing a set of
                  instructions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Explain How Programming Works?
                </h3>
                <p className="mt-1 dark:text-gray-400">
                  Once the code is written, the code is then compiled or
                  interpreted, a process that converts source code into machine
                  code, which is the only programming language a computer can
                  understand. The computer then executes the code to perform the
                  desired task.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  How Does a Syntax Error Occur?
                </h3>
                <p className="mt-1 dark:text-gray-400">
                  Syntax errors can occur when you misspell a statement, or
                  you’re missing a punctuation mark. Another possibility is
                  using a variable before it has been declared. Missing brackets
                  (i.e. opening a bracket but not closing it) is another common
                  cause.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  How Does a Logical Error Occur?
                </h3>
                <p className="mt-1 dark:text-gray-400">
                  Various programming mistakes can cause logic errors. Examples
                  include: assigning a value to the wrong variable, incorrectly
                  using logical operators or Boolean operators, using incorrect
                  program design, or multiplying two numbers instead of adding
                  them together.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Blog;