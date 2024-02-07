import {Component} from 'react'

import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
    latestHistoryList: initialHistoryList,
    isTrue: false,
  }

  filterFunction = value => {
    const {latestHistoryList} = this.state
    const newHistoryList = latestHistoryList.filter(
      eachVal => eachVal.id !== value,
    )
    if (newHistoryList.length === 0) {
      this.setState({latestHistoryList: newHistoryList, isTrue: true})
    } else {
      this.setState({latestHistoryList: newHistoryList})
    }
  }

  searchFunction = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, latestHistoryList} = this.state
    let {isTrue} = this.state
    const newHistoryList = latestHistoryList.filter(eachVal =>
      eachVal.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (newHistoryList.length === 0) {
      isTrue = true
    }

    return (
      <div className="app-cont">
        <div className="top-holder">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="image"
            alt="app logo"
          />
          <div className="search-folder">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-icon"
              alt="search"
            />
            <input
              type="search"
              className="input-element"
              placeholder="Search history"
              onChange={this.searchFunction}
              value={searchInput}
            />
          </div>
        </div>
        <div className="content-holder">
          {!isTrue && (
            <ul className="inner-holder">
              {newHistoryList.map(eachObj => (
                <li key={eachObj.id} className="items-holder">
                  <p className="time">{eachObj.timeAccessed}</p>

                  <div className="icon-holder">
                    <img
                      src={eachObj.logoUrl}
                      className="logo-element"
                      alt="domain logo"
                    />
                    <div className="logo-content">
                      <p className="name"> {eachObj.title}</p>
                      <p className="website"> {eachObj.domainUrl}</p>
                    </div>
                  </div>
                  <button
                    className="del-btn"
                    type="button"
                    data-testid="delete"
                    onClick={() => this.filterFunction(eachObj.id)}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                      className="del-icon"
                      alt="delete"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {isTrue && (
            <div className="empty-cont">
              <p className="empty-element">There is no history to show</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
