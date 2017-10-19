import React, { Component } from 'react';
import './Github.css'

import GithubService from '../../services/GithubService'

class Github extends Component {

    constructor() {
        super()

        this.state ={
            isToggleOn: false,
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
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
     }

    componentWillMount() {

        GithubService.getProfile(this.props.user)
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
                <span  className="photo">
                    <img src={this.state.avatar_url} onClick={this.handleClick} alt="Github profile"/>
                </span>              
                <div className="profileInfo">
                    {this.state.isToggleOn
                        ? //console.log('on')
                            <div>
                                <p><a href={this.state.html_url}><span>Name: </span>{this.state.name}</a></p>
                                <p><a href={this.state.repos_url}><span>Public Repositories: </span>{this.state.public_repos}</a></p>
                                <p><a href={this.state.followers_url}><span>Followers: </span>{this.state.followers}</a></p>
                                <p><a href={this.state.following_url}><span>Following: </span>{this.state.following}</a></p>
                            </div>
                        : null}
                </div> 
            </section>
        )
    }
}

export default Github