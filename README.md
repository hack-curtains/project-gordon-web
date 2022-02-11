<img display="center" src="dist/resources/chef-logo.png"></img>

## Project Overview
(Description)


<div align="center">

| [Demo](#demo) |
| [Module Detail](#module-detail) |
| [Technologies](#technologies) |
| [Getting Started](#getting-started) |

</div>

<div align="center">

#### **Team Curtain's Full-Stack Project Members**

<table align="center">
    <th colspan="6">Team Members</th>
  <tr>
      <td width="100px" align="center"><a href="https://github.com/asieke"><img src="https://avatars.githubusercontent.com/u/4070885?v=4" height="85px" width="85px" alt=""/><sub><b>Alex<br>Sieke</b></sub></a><br/></td>
      <td width="100px" align="center"><a href="https://github.com/Heine574"><img src="https://avatars.githubusercontent.com/u/26636748?v=4" height="85px" width="85px" alt=""/><sub><b>Johannes<br>Niemelä</b></sub></a<br/></td>
      <td width="100px" align="center"><a href="https://github.com/FullStackEidolon"><img src="https://ca.slack-edge.com/T01J1BRG8E4-U02LEUYHDV3-08fca025c853-512" height="85px" width="85px" alt=""/><sub><b>Ian<br>McGahren</b></sub></a><br /></td>
      <td width="100px" align="center"><a href="https://github.com/lbc1013"><img src="https://avatars.githubusercontent.com/u/65844592?v=4" height="85px" width="85px" alt=""/><sub><b>ByungChan<br>Lee</b></sub></a><br/></td>
      <td width="100px" align="center"><a href="https://github.com/leonardodeutsch"><img src="https://avatars.githubusercontent.com/u/90005014?v=4" height="85px" width="85px" alt=""/><sub><b>Leonardo<br>Deutsch</b></sub></a><br/></td>
      <td width="100px" align="center"><a href="https://github.com/winstonthep"><img src="https://avatars.githubusercontent.com/u/91493090?v=4" height="85px" width="85px" alt=""/><sub><b>Winston<br>Pantelakos</b></sub></a><br/></td>
  </tr>
</table>

</div>

*Our project management / ticketing system : <a href='https://trello.com/b/z8nnOpaT/project-gordon-web'>https://trello.com/b/z8nnOpaT/project-gordon-web</a>


## Demo
##### 1. Website View
![demo gif](dist/resources/Pantry-Chef.gif)


##### 2. Mobile View
![demo gif](dist/resources/Pantry-Chef-Mobile.gif)
## Module Detail
### 1. Authentication and Profile

- Users are able to sign up to create a profile or sign into an existing profile from a sign in modal. User emails are validated in this modal with native HTML email validation.
- Upon signing in, user information populates all aspects of the app. Users are then able to access their favorited recipes and pantry items, which persist across login sessions.

### 2. Search View & Result View

(Description)

### 3. Home View & Favorite View

- Display the main homepage image that gets changed everytime the user enters.
- List out the Recommend Recipes for the guest and provide the sort options such as the most popular, price:high-low, price:low-high.
- For the favorite View, display the Favorited Recipes list for the logged-in user.

### 4. Solo Recipe View & Recipe Tile

- Reusable Recipe Tile component used in different components throughout the app, also dynamic in size and information based on platform (desktop/mobile).
- Solo Recipe View with more detailed information of a specific recipe, including a dynamic ingredient list that shows the user which ingredients they currently have in their pantry based on the user's input.
- Liking and Favoriting functionality in both tiles and full recipe view which persist through user logins.

### 5. Pantry Chef api
https://github.com/hack-curtains/project-gordon-api

## Technologies

####  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img width="10%" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"> <img width="10%" src="https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg">
####  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img width="10%" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"> <img width="10%" src="https://www.vectorlogo.zone/logos/nodemonio/nodemonio-ar21.svg"> <img width="10%" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"> <img width="10%" src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png"> <img width="10%" src="https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg"><img width="10%" src="https://www.vectorlogo.zone/logos/npmjs/npmjs-ar21.svg">
####  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img width="15%" src="https://www.vectorlogo.zone/logos/js_webpack/js_webpack-ar21.svg"> <img width="10%" src="https://www.vectorlogo.zone/logos/babeljs/babeljs-ar21.svg">
####   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <img width="10%" src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg"><img width="10%" src="https://www.vectorlogo.zone/logos/docker/docker-ar21.svg">
####   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <img width="10%" src="https://www.vectorlogo.zone/logos/trello/trello-ar21.svg">


## Getting Started
To run the app on your local machine:

(Description)
