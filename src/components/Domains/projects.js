import React from 'react'
import DomainCard from '../Cards/DomainCard'

const Projects = () => {
    const frontFace =
        <div className="front-face-card">
            <div className="front-face-card-content">
                <h1>My recent project <a href="https://github.com/manojnaidu619/Whatsupp-SSH" target="_blank">Whatsupp SSH?</a></h1>
                <p>A NodeJS application which lets you access your SSH/ computer from anywhere over Whatsapp</p>
            </div>
            <div className="more">See here<img src="https://img.icons8.com/all/500/long-arrow-right.png"/></div>
        </div>
    
    const backFace = 
        <div className="back-face-card">
            <h1>Projects</h1>
            <div className="back-face-card-content">
                <div className="project">
                    <h2>Whatsupp SSH?</h2>
                    <p>Access SSH/ home computer from anywhere over Whatsapp</p>
                    <p>Used : NodeJS, AWS EC2</p>
                    <div className="project-links">
                        <a href="https://dev.to/manojnaidu619/whatsupp-ssh-accessing-ssh-over-whatsapp-2g3g" target="_blank">Dev Post</a>
                        <a href="https://github.com/manojnaidu619/Whatsupp-SSH" target="_blank">Code</a>
                    </div>
                </div>
                <hr />
                <div className="project">
                    <h2>Movie seat booking</h2>
                    <p>A ReactJS app replicating movie seats booking.</p>
                    <p>Used : ReactJS</p>
                    <div className="project-links">
                        <a href="https://react-movie-seat-booking.now.sh" target="_blank">Visit</a>
                        <a href="https://github.com/manojnaidu619/react-movie-seat-booking" target="_blank">Code</a>
                    </div>
                </div>
                <hr />
                <div className="project">
                    <h2>BrainF**k Interpreter</h2>
                    <p>Brainfuck interpreter built using Ruby</p>
                    <p>Used : Ruby</p>
                    <div className="project-links">
                        <a href="https://github.com/manojnaidu619/Brainfuck-interpreter" target="_blank">Link</a>
                    </div>
                </div>
                <hr />
                <div className="project">
                    <h2>Milestone</h2>
                    <small>An event management site</small>
                    <p>A full-fledged Ruby on Rails app for managing university events and student registrations.</p>
                    <p>Used : Ruby, Devise, PrawnPDF, ActiveStorage, JSON</p>
                    <div className="project-links">
                        <a href="https://milestone619.herokuapp.com/" target="_blank">Visit</a>
                        <a href="https://github.com/manojnaidu619/milestone" target="_blank">Code</a>
                    </div>
                </div>
                <hr />
                <div className="project">
                    <h2>Logging Good</h2>
                    <small>A friendly Ruby gem</small>
                    <p>Gem to make Rails logging more intuitive by presenting essential data in a tabular form.</p>
                    <p>Used : Ruby, Rubygem, RSpec, TravisCI</p>
                    <div className="project-links">
                        <a href="https://github.com/manojnaidu619/logging-good" target="_blank">Code</a>
                        <a href="https://rubygems.org/profiles/manojnaidu619" target="_blank">View all my gems</a>
                    </div>
                </div>
                <hr/>
                <div className="project">
                    <h2>Pickup Master</h2>
                    <small>A Google Assistant action</small>
                    <p>A voice invoked google action voice built with Dialogflow API + Firebase Cloud functions.</p>
                    <p>Used : G-assistant, G-actions, Dialogflow, firebase-serverless</p>
                    <div className="project-links">
                        <a href="https://assistant.google.com/services/a/uid/00000081366fbad1" target="_blank">Visit</a>
                    </div>
                </div>
                <hr/>
                <div className="project">
                    <h2>Tasky</h2>
                    <small>Task-Organizer App</small>
                    <p>Vue.js + Rails, makes Managing Tasks and To-Do's much more cushier.</p>
                    <p>Used : Ruby, VueJS, RailsAPI, JSON</p>
                    <div className="project-links">
                        <a href="https://tasky916.herokuapp.com/" target="_blank">Visit</a>
                        <a href="https://github.com/manojnaidu619/task-organizer-vue-rails" target="_blank">Code</a>
                    </div>
                </div>
                <hr/>
                <div className="project">
                    <h2>Readit</h2>
                    <small>App for sharing readable links</small>
                    <p>Rails app for sharing legible links, with like and dislike feature being supported.</p>
                    <p>Used : Ruby, Votable, Likeable, Commentable, Devise</p>
                    <div className="project-links">
                        <a href="https://readit619.herokuapp.com/" target="_blank">Visit</a>
                        <a href="https://github.com/manojnaidu619/Read-It" target="_blank">Code</a>
                    </div>
                </div>
                <hr/>
                <div className="project">
                    <h2>AlphaBlog</h2>
                    <small>A Blog (My first ever Rails application)</small>
                    <p>Blog with CRUD operations + auto fetch profile picture with Gravatar API..</p>
                    <p>Used : Ruby, Devise, Gravatar, JSON</p>
                    <div className="project-links">
                        <a href="https://alphablog619.herokuapp.com/" target="_blank">Visit</a>
                        <a href="https://github.com/manojnaidu619/Alpha_blog" target="_blank">Code</a>
                    </div>
                </div>
            </div>
        </div>
    
    return (
        <DomainCard
            frontFace={frontFace}
            backFace={backFace} />
    )
}

export default Projects