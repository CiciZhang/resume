import React, {Component} from 'react'
import jobs from './jobs'

class Experience extends Component {
    render(){
        return(
            <div className="experience">
                <h2>Experience</h2>
                {jobs.map((job)=> {
                    return(
                        <div className="jobExperiences" key={job.key}>
                            <section className="jobTop">
                                <div className='companyAndTitle'>
                                    <h3>{job.company}</h3>
                                    <h4>{job.jobTitle}</h4>
                                    {/* ADD LOGO HERE */}
                                </div>
                                <div className="timeAndLocation">
                                    <h4>{job.start} to {job.end}</h4>
                                    <h4>{job.location}</h4>
                                </div>
                                <p>Technology: {job.tech}</p>
                            </section>
                            <ul className="jobBottom">
                                <li>{job.bullet1}</li>
                                <li>{job.bullet2}</li>
                                <li>{job.bullet3}</li>
                                <li>{job.bullet4}</li>
                            </ul>
                           

                        </div>
                        
                        
                    )
                })}
            </div>
        )
    }
}

export default Experience

// {
//     this.state.movies.map((movieObject) => {
//         return (
//             <div key={movieObject.id} className="movie">
//                 <Link to={`/movie/${movieObject.id}`}>
//                     <img src={`http://image.tmdb.org/t/p/w500/${movieObject.poster_path}`} alt={`Official Poster for ${movieObject.original_Title}`} />
//                 </Link>
//             </div>
//         )
//     })
// }