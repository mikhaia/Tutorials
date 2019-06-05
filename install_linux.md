# Start Work



Make sure that we already have a new version of [NPM](https://nodejs.org).

Make a folder for future projects, if you haven’t done so yet.

In my case I made

`mkdir ~/projects/`

Go to the created folder

`cd ~/projects/`

Clone two projects from Github

`git clone git@github.com:phillymedia/PageBuilder-Docker.git`

`git clone git@github.com:wapopartners/PMN-PageBuilder-Features.git`

`cd PMN-PageBuilder-Features`

Make sure you are set a local branch to **origin/master**

`git checkout origin/master`

Now make your branch for your task from Jira

`git checkout -b TASK-999`

Then do install and run yarn

`yarn install`

`yarn dev`

And start the project on local machine

`cd ../PageBuilder-Docker`

`export PROJECT_REPO=../PMN-PageBuilder-Features/`

`sudo -E npm start`



Add to hosts file 

`127.0.0.1	localhost.arcpublishing.com`



Here we go the project will be available on this [link](http://localhost.arcpublishing.com/pb/)
