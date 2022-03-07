# Ship management App
## Table of contents
* [Get source code](#get-source-code)
  * [Clone the repository](#clone-source)
  * [Download the code](#download-the-code)
* [Run the project](#run-the-project)
* [Current release](#current-release)
  * [Backend API documentation](#backend-api-documentation)
  * [Extending the frontend](#extending-the-frontend)
* [Contributor](#contributor)
* [License](#license)

### Get source code

#### Clone the repository
Before you can run the application, you need to get the application source code, for this you will clone the repo.
* In your local computer, create a folder were you want to save the code, then, open this folder with the code editor, or just place yourself in the desired directory with `cd` command.
* Open the terminal and type:
 ```bash
git clone https://github.com/retseltony/shipManagement.git
```
#### Download the code
The source code can be alternatively downloaded form the Github repository. To do so, these steps should be followed:
* On the repository main [view](https://github.com/retseltony/shipManagement), click on "Code" and select the "Download Zip" choice.
* The file will be downloaded to a location in your local computer where it should be extracted.
* Once extracted, open the folder with your code editor.

### Run the project
* Open the terminal, once the code is on your local PC and run:
```console
docker-compose up
```
* After a few seconds, open your web browser to http://localhost:3000. You should see the app!

Now it is time to add a ship to our ship fleet, you can also select from the given list to update or remove them.

#### Current release
* **Status**: Beta version, code committed to "master" branch.
* Features:
  * CRUD operation backend services using DDD.
  * User interfaces to list, edit, delete and insert ship in React.
  * Project image in Docker

#### Backend API documentation
The Backend API documentation is available, once the app is running, on http://localhost:5080/swagger/index.html.

#### Extending the frontend
Install the node dependencies to run frontend app for extending the frontend.
* Open a new terminal and place in the frontend folder by typing:
```console
cd .\frontend\
```
* Install Node dependencies for the project:
```console
npm install
```
* Run frontend app:
```console
npm run start
```

### Contributor
 [retseltony](https://github.com/retseltony/) -
  **Lester Antonio Gonzalez Gutierrez** <<retseltony@gmail.com>> (he/him)

## License
* [MIT license](https://opensource.org/licenses/MIT). Node.js also includes external libraries that are available under a variety of licenses.  
See [LICENSE](https://github.com/nodejs/node/blob/HEAD/LICENSE) for the full license text.
* [MICROSOFT SOFTWARE LICENSE TERMS](https://dotnet.microsoft.com/en-us/dotnet_library_license.htm)
