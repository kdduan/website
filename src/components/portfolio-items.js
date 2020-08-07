const portfolioItems = [
  {
    title: 'What projects have I worked on?',
    desc: [
      {
        title: 'Leeting Logs',
        desc: 'This project aims to provide a better resource for users to keep track of their Leetcode problems while preparing for technical interviews and also perform basic exploratory analysis. My friend and I are using React, Typescript, Apollo GraphQL, and Prisma to create the website. The app is still in the beginning stages, but so far we have completed the CRUD operations for problem cards as well as a basic analytics dashboard.',
        idx: 1
      },
      {
        title: 'Online Course Recommendation System (Summerhacks)',
        desc: "For summerhacks, a remote hackathon spanning summer 2020, my group and I desided to make an app that would help users choose which online courses to take as everyone was in quarantine. We envisioned a resource that could unify online courses present in Coursera, Udemy, and edX so that users could log a course they've taken from any of these platforms and get a recommendation for which course to take next. The MVP is nearly complete, and we are building the app with React, Flask, and Firebase. We built the recommender system with Python and utilized the NLTK library in order to create an algorithm that would recommend courses based on word intersection between courses in the database and courses that the user has logged as taken.",
        idx: 2
      },
      {
        title: 'Predicting Olympic Impact on Local Businesses (Citadel Datathon)',
        desc: "For the 2020 Citadel Datathon, teams were tasked with analyzing the socioeconomic impact that the Olympics have on host cities. My team and I decided to take a more microecnomic approach and see if we could predict how local businesses would be impacted by the Olympics. From the papers we read, there was surprisingly little research on this topic. We felt that a predictive model for business popularity would have great utility for local business owners as they could adjust to the Olympics more effectively. We were provided with various starter datasets, and my group and I scraped data from the Foursquare API to measure venue popularity by the number of visits. We also gathered data for the London Underground in order to represent the subway network as a graph and calculate the eigenvalue centrality (page rank) of each station, and we engineered a few other features which were inspired by the literature we read while researching. In the end we managed to create a soft-voting classifier using Logistic Regression, SVM, and Random Forest classifiers that achieved a 0.69 AUC score.",
        idx: 3
      },
      {
        title: 'Triangle Pattern Convolutional Neural Network',
        desc: 'This project was inspired by my work as an intern at the SEC. I plotted the daily Open High Low Close (OHLC) data for companies in the S&P 500 and trained a Convolutional Neural Network to identify "triangle" patterns within the visualizations. I then used the signals generated from the CNN to construct a trading strategy whwere when I received a positive triangle signal, I was essentially long short-term volatility for the particular ticker. Given the project\'s similarity to my work, I don\'t feel comfortable disclosing too much, but if you are interested feel free to reach out to me!',
        idx: 4
      }
    ],
    idx: 1
  },
  {
    title: 'What courses have I taken?',
    desc: [
      {
        title: 'Current',
        desc: "Operating Systems, Programming Languages (Graduate), Foundations of Machine Learning (Graduate), Economics of Global Business, Organizational Communication"
      },
      {
        title: "Mathematics and Statistics",
        desc: "Multivariate Calculus, Linear Algebra, Discrete Mathematics, Theory of Probability, Statistical Inference and Regression Analysis, Forecasting Time Series Data, Real Analysis I"
      },
      {
        title: "Computer Science",
        desc: "Data Structures, Basic Algorithms, Computer Systems Organization, Introduction to Machine Learning, Computer Vision (Audit)"
      },
      {
        title: "Miscellaneous / Online",
        desc: "Machine Learning (Coursera)"
      },
    ],
    idx: 2
  },
  {
    title: "Curious about my experience?",
    desc: [ 
      {
        title: 'Resume',
        desc: "If you're interested in learning more about my experiences or qualifications, feel free to reach me at shizhuo.duan@stern.nyu.edu for my resume or just to chat!"
      },
      {
        title: "What I'm currently working on",
        desc: "Since I'm a full time student, I mainly keep busy with coursework or my responsibilities as the Quant Porfolio Manager for my school's Quantitative Finance Society. When I'm free, I enjoy keeping up with Philly sports teams, exploring new restaurants in the city, and coding. Recently, I've begun exploring Reinforcement Learning in order to create a bot that can ascend the ladder on Pokemon Showdown, and I'm studying statistical theory in order to compete in more Kaggle Competitions and Datathons."
      }
    ]
  }
]

export default portfolioItems
