# vilde-halvorsen-js2-ca

Strapi application

To start the Strapi project:

(You must clone the repository in the assignment brief and run the following in that project)

npm install
npm run develop

Login details:

Username: admin@admin.com
Password: Pass1234


There is one content type in the project, accessible at http://localhost:1337/articles.

If you get an error about port 1337 being in use, you probably have Strapi running in another command line or terminal.

Note: If you are getting an error when trying to post using the username and password above, please try the password 'Pass123' instead of 'Pass1234'.



Brief

    Use the Strapi API found here. The login details for admin section are in the README file in the repo.
    You can add and edit content in the Strapi project but do not edit the content type(s) (don’t add, edit or delete fields). The markers will use the same version of the API found in the repo.
    You can also build your own API using any technology but it MUST BE publicly hosted. Do not submit your API code if you create your own. If you do build and host your own API, the content type it serves must include at least 3 properties.
    Level 1 is required. Level 2 is optional.
    Choosing appropriate variable and function names will form part of your assessment, as will proper and consistent formatting of your code.


Level 1 Process
Build a frontend for the API and add the following:

Home page

    Make a GET request to fetch a list of resources from your API.
    Create HTML for each item and display at least 3 properties for each.
    Each item should also display a button or icon. Clicking on this button should toggle the item in and out of an array stored in localStorage.
    There should be a text input on this page that filters the array of results on one of the properties.

Favourites page

    This page should fetch the array of items stored in localStorage and display them or display a message that there are no items.
    There should be a “Clear all” button that clears localStorage (or just a specific key in localStorage) and reloads the display. Don’t reload the page, just redraw the HTML.

Level 2 Process
Add a login form to your frontend that will allow a logged in admin user to perform the following tasks:

    Adding new resources to the API
    Updating resources through an edit form
    Deleting resources
