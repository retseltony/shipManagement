# Ship management App
# Table of contents
*[Clone the code source](#download-source)
* [Open the project](#open-project)
* [Starting an app container](#start-container)
* [Project contributor](#project-contributor)
  * [Current release](#current-*release)
* [License](#license)

### Clone the code source
Before you can run the application, you need to get the application source code, for this you will clone the repo.
In your local computer, create a folder were you want to save the code, then open this folder with the code editor, or just place yourself in the desired directory.
Open the terminal in the terminal and type:
 ```bash
git clone https://github.com/retseltony/shipManagement.git
```

```console
$ curl -O https://nodejs.org/dist/vx.y.z/SHASUMS256.txt
```
### Starting an app container
1- Start the container using the docker run command and specify the name of the image:
```console
$ docker run -dp 5080:80 retseltony/ship-management-api
```
2 - After a few seconds, open your web browser to http://localhost:3000. You should see the app!

Now it is time to add a ship to our ship fleet, you can also select from the given list and update or remove them.

#### Current release
* **Status**: Under development, code committed to "master" branch.
Features:
* CRUD operation backend services using DDD.
* User interfaces to list and insert ship in React.
* Project image in Docker

### Project contributor
* [retseltony](https://github.com/retseltony/) -
  **lester Antonio Gonzalez Gutierrez** <<retseltony@gmail.com>> (he/him)


## License
[MIT license](https://opensource.org/licenses/MIT). Node.js also includes
external libraries that are available under a variety of licenses.  See
[LICENSE](https://github.com/nodejs/node/blob/HEAD/LICENSE) for the full
license text.
[MICROSOFT SOFTWARE LICENSE TERMS](https://dotnet.microsoft.com/en-us/dotnet_library_license.htm)