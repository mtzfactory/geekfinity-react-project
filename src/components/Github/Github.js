import React, { Component } from 'react';
import './Github.css'

import GithubService from '../../services/GithubService'

class Github extends Component {

    constructor() {
        super()

        this.state ={
            name: '',
            public_repos: 0,
            followers: 0,
            following: 0,
            avatar_url: '',
            html_url: '',
            followers_url: '',
            following_url: '',
            repos_url: ''
        }
    }

    componentWillMount() {

        GithubService.getProfile()
            .then(({name, public_repos, following, followers, avatar_url, html_url, followers_url, following_url, repos_url}) => {
                //console.log(profile)
                this.setState({name, public_repos, following, followers, avatar_url, html_url, followers_url, following_url, repos_url})
            })
            .catch(function(error) {
                console.error(error)
            })
    }

    render() {
        return (
            <section className="profile" style={{ color: this.props.foreColor, backGround: this.props.backColor }}>
                <span  class="photo">
                    <a href={this.state.html_url}><img src={this.state.avatar_url} /></a>
                </span>              
                <div className="profileInfo">
                    <p><a href={this.state.html_url}>Name: {this.state.name}</a></p>
                    <p><a href={this.state.repos_url}>Public Repositories: {this.state.public_repos}</a></p>
                    <p><a href={this.state.followers_url}>Followers: {this.state.followers}</a></p>
                    <p><a href={this.state.following_url}>Following: {this.state.following}</a></p>
                </div> 
            </section>
        )
    }
}

export default Github