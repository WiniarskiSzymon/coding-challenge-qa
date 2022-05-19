# Talentspace Coding Challenge - QA

## The Goal
Your task is to write some end-to-end test with Cypress to demonstrate your test automation abilities. 

## What you'll need
1. The [Cypress Docs](https://docs.cypress.io)
1. The URL to the app that should be tested: [Personal Library App](https://ts-e2e-challenge.netlify.app/) 

## The Process
1. Clone this GitHub repo - **forking is not possible due to limited rights**
1. In your cloned repo, set up a new Cypress environment
1. Write the end-to-end tests fulfilling the [Acceptance Criteria](#acceptance-criteria) below
1. Push it to your own repo that you can then share with us - **you have no writing rights on this repo**
1. In your repo please document how to run the code you've written and how to verify the fulfilment of the acceptance criteria. Feel free to add additional thoughts, e.g. why you implemented a feature in a certain way, what were your learnings etc.
1. Let us know via Email that you've finished the task so we can schedule the Code Review session with you

## Acceptance Criteria
1. Write a first end-to-end test which checks the registration flow for a new and valid user (start on initial page of the app and end on Dashboard)
1. Write a second end-to-end test which checks that you can't register with an already existing username 
1. Write a third end-to-end test which checks the flow for adding a book to the personal reading list (must click "+" sign on a book from the "Disover" tab) and verifies that it's working correctly

For these tests please keep in mind that logins&registrations are only saved in the browser's localStorage and are not persisted in an external server.

## Bonus Round (not required, but nice-to-have)
* Usage of code quality tools such as eslint, prettier, flow or typescript
* Integration of your tests into a CI pipeline
* Screenshot diffing
* Surprise us…

## Technical questions
Please additionally answer the following questions in a markdown file called `Answers to technical questions.md`.

1. How long did you spend on the technical test? What would you add to your solution if you had more time? If you didn't spend much time on the technical test then use this as an opportunity to explain what you would add.
1. What do you think is the most interesting trend in test automation?
1. How would you approach adding automated testing to an existing (web) application with no existing E2E tests? Have you ever had to do this?

## How we're evaluating the result
Prioritised from most important to least important, here are our evaluation criteria:
1. **Acceptance Criteria**: Have all acceptance criteria been fulfilled correctly? 
1. **Code Quality**: Is the code that you've written clean, well-structured and easy to understand?
1. **Documentation**: Did you document how to run your tests well? Is your written communication clear and easy-to-understand?
1. **The extra mile**: Everything you did on top of the acceptance criteria. See [Bonus Round](#bonus-round-not-required-but-nice-to-have)
