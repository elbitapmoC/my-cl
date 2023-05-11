TLDR;
![Screenshot 2023-05-11 at 2 50 37 AM](https://github.com/elbitapmoC/my-clinintell/assets/11306948/fe53a439-ac76-4ee4-a5eb-08dccba60b5d)

### How to run app & test

First, run the development server:

```bash
#STEP 1 - install dependencies
npm i
```

```bash
#STEP 2 - run build
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<hr>

_(Oh great! You've made it this far. I see you love documentation too. Proceed.)_

# 🥷 ClinIntell Mission Briefing :

### Assignment: Create an app that focuses on data visualization & users taking a test.

<hr>
###### Data Visualization Page - Show a table using given data.
  - Use `conditionData` array.
  - The table columns are the property.
  - Keys (CONDITION_NAME, etc..)
  - If CHANGE value is positive && greater than CHANGE_ERROR value, set cell color of CHANGE to green.
  - If CHANGE is negative && the **absolute** value is greater than CHANGE_ERROR, then set the cell color of CHANGE to red.
<br>
###### Online Test page - Activates a test questionnaire. (3 Test questions) `testQuestions` object.
  - Show Questions one at a time.
  - Answering questions should transition to the next question in the
   sequence.
  - One answer per question. 
  - Submit button to submit form.
  - Output results to the console.
  
  **BONUS - Progress bar that updates.**

![Screenshot 2023-05-11 at 2 52 06 AM](https://github.com/elbitapmoC/my-clinintell/assets/11306948/58d3d20a-0242-4bcd-803a-d5cac5171459)
![Screenshot 2023-05-11 at 2 52 16 AM](https://github.com/elbitapmoC/my-clinintell/assets/11306948/7fabf82a-c125-4d26-a955-522d8f11c7f8)
![Screenshot 2023-05-11 at 2 52 29 AM](https://github.com/elbitapmoC/my-clinintell/assets/11306948/ba13c584-41e4-4ecb-ac4a-48f61dc91f73)
![Screenshot 2023-05-11 at 2 54 15 AM](https://github.com/elbitapmoC/my-clinintell/assets/11306948/1051d7f4-9d0b-475b-8582-963f7147833a)


## Dev Notes / What we used

- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
  - Scalable bearbones state management solution
  - Quick to learn (I learned it for this project)
  - Lightweight
  - Fast
- [AG-Grid](https://www.ag-grid.com/react-data-grid/getting-started/)
  - Visualize data
  - Use charts
  - Use graphs
- [SOLID Principles](https://www.youtube.com/watch?v=MSq_DCRxOxw&t=27s)
- Responsiveness

- [Apollo GraphQL](https://www.apollographql.com/)
  - Fixes the issue of over-fetching
  - Fixes the issue of making multiple requests for multiple resources
- [NextJS](https://nextjs.org/)
  - Lots of features
  - Performance! Performance! Performance!
  - SEO
  - Accesibility
  - plus so much more
- [React](https://reactjs.org/)
  - Components. Create once, use everywhere.
  - Big time saver.
  - Very large community, which means great support.
  - There's nothing I can't figure out
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
  - Utility-first CSS framework
  - Less time thinking of class names, more time making progress.
  - Lightweight because it's use what you need, it won't download everything from the framework.
  - Responsiveness
  - UI 👍

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Future Improvements / Thoughts

- SolidJS?
- Svelte?
- Scale into a larger app.
  - Quizlet and Kahoots are great inspo.
- Zustand was VERY pleasant to use.
