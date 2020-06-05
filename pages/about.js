import React from 'react'

/* const About = () => (
    <h1>This is About Page</h1>
)
*/

/* const About = () => {
    const message = 'Hello About'
    return (
        <h1>This is About Page - {message}</h1>
    )
}
*/

//const About = () => {
//    const message = 'Hello About'
//    return React.createElement('div', null, 'Testing React')
//}


/*function About(){
    return (
        <h1>About Page</h1>
    )
}
*/


class About extends React.Component {
    render(){
        return(
            <h1>Hello I am class component</h1>
         )
    }
}



export default About