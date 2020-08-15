[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Eat-Da-Burger

A burger logger (restuarant app) with MySQL, Node, Express, Handlebars and a homemade ORM following the MVC design pattern

[![Thumbnail](public/assets/img/Eat-Da-Burger-thumbnail.JPG)](https://intense-hollows-80590.herokuapp.com/)

## Table of Contents

- [Description](#Description)

- [Installation](#Installation)

- [Instructions](#Instructions)

- [License](#License)

- [Contributing](#Contributing)

- [Tests](#Tests)

- [Questions](#Questions)

## Description

This is a fullstack app that uses html, css, bootstrap, nodeJS, express, express handlebars, mysql, dotenv and a homegrown ORM. It implements the following html routes GET '/' for the home page. It also implements the following api routes. POST '/api/burgers' for creating a new burger in json format. OUT '/api/burgers/:id/ for updating a particular burger's devoured state. The application uses a mysql db. It uses a home grown orm to abstract the data base queries. The auto-created id is rendered along with the burger name.

The user can order a new burger, it goes to waiting area to be devoured. Once the user clicks 'Devour it!' button, the burger moves to 'Devoured' section in the page.

## Installation

You need express, express handlebars, mysql, dotenv packages installed for this app to run. So the steps are :

1. Clone this [repository](https://github.com/s-suresh-kumar/Eat-Da-Burger)
2. Issue `npm i` at your local repository root, so that all dependencies (express, express-handlebars, mysql, dotenv packages ) are installed.
3. Then you can use loop back address on you to exercise this app. For that launch the app at the root of the repository 'nodemon server.js'. Then in the browser, go to http://localhost:8080/ and navigate from there to see the app in action.
4. You may also deploy it in deployment platforms such as Heroku and then access the app using the url provided by the platform.

## Instructions

Since this is a full stack app, the app needs to be deployed first. There is a deployed version available in Heroku. The url for the deployed app is https://intense-hollows-80590.herokuapp.com/. From here by filling out a new burger and clicking on 'New Burger' button, burger will get created in the database and taken to the waiting area to be devoured on the left side ( so rendered). Once the user clicks on the 'Devour it' button against the burger that he wants to devour, it will move to the right section aptly named 'Devoured'. Currently there is no way to neither delete the burger nor clear the database for the user. All the effects of actions such as creating new burger, devouring it etc are immediately (re-)rendered for the user to see.

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) License.

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.

### Pull Request Process

Ensure any install or build dependencies are removed before the end of the layer when doing a build.
Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is SemVer.
You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Code of Conduct

#### Our Pledge

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

#### Our Standards

Examples of behavior that contributes to creating a positive environment include:

Using welcoming and inclusive language
Being respectful of differing viewpoints and experiences
Gracefully accepting constructive criticism
Focusing on what is best for the community
Showing empathy towards other community members
Examples of unacceptable behavior by participants include:

The use of sexualized language or imagery and unwelcome sexual attention or advances
Trolling, insulting/derogatory comments, and personal or political attacks
Public or private harassment
Publishing others' private information, such as a physical or electronic address, without explicit permission
Other conduct which could reasonably be considered inappropriate in a professional setting

#### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.

#### Scope

This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.

#### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at [suresh01@yahoo.com]. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project's leadership.

#### Attribution

This Code of Conduct is adapted from the Contributor Covenant, version 1.4, available at http://contributor-covenant.org/version/1/4

## Tests

There are no automated tests written for this app. However it is easy to launch the app by going to https://agile-everglades-01445.herokuapp.com/, Once the page is visited, it is straight forward to create new burgers and devour it, by using the appropriate forms and buttons.

## Questions

Please send your questions via e-mail or via my github profile.

https://github.com/s-suresh-kumar
suresh01@yahoo.com
