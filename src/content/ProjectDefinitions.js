const PROJECTS  = [ {
    title: 'PayDay App',
    photos: {
        url: '/images/payday/photo',
        count: 4,
        fileType: 'png'
    },
    description: `The PayDay application is a Full-Stack REACT app. It demonstrates the ability
                  to create UIs- stateful or not- using either a function or class component. I implemented custom
                  Hooks, used advanced CSS late features, custom events, and many more features.  `,
    techStack: ['MERN'],
    languages: ['JavaScript', 'HTML', 'CSS']

},
{
    title: 'Machine Learning Dashboard',
    photos: {
        url: '/images/mldash/photo',
        count: 2,
        fileType: 'png'
    },
    description: `This application implements a buisness analytics dashboard for a fictional hotel company.
                  The UI was created using REACT and the ChartJS library. The backend consists of an express server that provides an API to a
                  logistic regression machine learning model created using Python and the Sci-kit-learn and Pandas libraries`,
    techStack: ['MERN', 'Pandas', 'Sci-kit Learn'],
    languages: ['JavaScript', 'HTML', 'CSS', 'Python']
}];

export default PROJECTS;