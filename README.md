# Guide to run the application on docker

  ## Prerequisites
  * You must already have docker installed in your system.

  ## Steps
  Run the following commands

  ### Step 1
  This command will build docker image of the application
  * docker build -t dashboard .

  ### Step 2
  This command will create a container and will run the given image on 5173 port
  * docker run -it --name Dashboard -p 5173:5173 dashboard

---
# Guide to start the application locally on your system

  ## Steps
  Run the following commands

  ### Step 1
  This command will install all the dependencies required
  * npm install

  ### Step 2
  This command will start the application locally on port 5173
  * npm run dev

