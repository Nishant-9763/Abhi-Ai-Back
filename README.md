# AI Image Generation App


The application use OpenAI's GPT (Generative Pre-trained Transformer) technology to generate images based on user input. Users provide text descriptions and on that basis AI generate an image that matches the description.

This project is an example of how we can use AI to show our creativity and make beautiful images.

Currently we only taking text description from the user to generate image but in future we will take size and number of images to generate images as user want.Apart from this we will improve our login and register process also.
## Demo
 
 https://aiimagegenarater.netlify.app


## Installation

To run project follow below commands :-

1] clone gitHUb Link

```bash
  git clone https://github.com/Nishant-9763/AI-back.git
```

2] Install dependencies

```bash
  npm install or npm i
```

3] Start the server

```bash
  npx nodemon index.js
## Environment Variables

To run this project, you will need to add the following environment variables to  your ".env file"

`API_KEY`

`ANOTHER_API_KEY`

`PORT` ---Port Number

`url` ---MongoDb Url

`KEY`  ---Jwt Secret Key

`OPENAI_API_KEY` ---OpenAI API key

/-------------Cloudinary Details---------------------/ 

`CLOUD_NAME`    -----cloudinary unique code      

`API_KEY`    -------coludinary API key

`API_SECRET`   -------cloudinary API secret Key

---------------------------------------------------------
## API Reference

#### Register User

```http
  POST /createUser
```
This endpoint register a user with taking details like  - full name,mobile_number,email_id and password.

#### Login User
```http
  POST /loginUser
```
 This endpoint login a user by taking correct email_id and password, and redirect them to create page.


#### Create Image
```http
  POST /createImmage
```
 This endpoint create a post or Image base on user text description.


#### Get Images

```http
  GET /getImages
```
 This endpoint get all images or post that user created .


#### Delete Image
```http
  DELETE /deleteImage/${imageId}/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|`id`       | `string` | **Required**. Id of single image  |
| `imageId` | `string` | **Required**. Id of images file to delete |

 This endpoint delete a particular image based on imageId that we provided.




## Images that generate from AI App 

![Astronaut on dog](https://res.cloudinary.com/ddraawvgd/image/upload/v1681464814/1681464812334.png)

![Astronaut on road](https://res.cloudinary.com/ddraawvgd/image/upload/v1681465018/1681465016237.png)

## Tech Stack

**Server:** Node, Express,MongoDB

## Other than that all we use some packages like 


`bcrypt` - to bcrypt password 

`shortid` - to generate unique id of user and images

`jsonwebtoken` - use to authenticate the user

`mongoose` - to commnicate between mongoDb and Node

`dotenv` - to protect our url,secret key,api keys

`openai` - to use api of openai to generate images

`cors` - make a connection bewtween forntend and backend

`cloudinary` - to store ai generated imgaes 

`nodemon` - to run server without stopping






## Documentation

[OpenAi](https://platform.openai.com/docs/guides/images)

[MongoDB](https://www.mongodb.com/docs/)

[Nodejs](https://nodejs.org/en/docs)

[Express](https://expressjs.com/en/api.html#express)

[bcrypt](https://www.npmjs.com/package/bcrypt)

[shortid](https://www.npmjs.com/package/shortid)

[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

[mongoose](https://mongoosejs.com/docs/documents.html)

[dotenv](https://www.npmjs.com/package/dotenv)

[cors](https://www.npmjs.com/package/cors)

[cloudinary](https://cloudinary.com/documentation)

[nodemon](https://www.npmjs.com/package/nodemon)



## Authors

- [Nishant](https://github.com/Nishant-9763)
## Feedback

If you have any feedback, please reach out to us at nishantgupta9763@gmail.com