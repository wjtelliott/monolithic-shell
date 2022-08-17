<!-- @format -->

# Monolithic Server/Client

## This is a monolithic approach to a PERN stack app

### Includes:

Packages included in client:

-   React (create-react-app defaults)
-   React Router Dom
-   Mui, with icons-material
-   AOS via CDN

Packages included in server:

-   DotEnv
-   Express
-   Http Status Codes
-   Morgan logger
-   Cors
-   Node PG

---

### Instructions:

Git clone this repo, run `npm run build` for Linux/Mac or `npm run winbuild` for windows, and then use the below scripts.

### Scripts:

-   `build` -> Generate a build version and install server modules
-   `winbuild` -> Windows syntax of the build script
-   `server` -> Start the server _only_ \*
-   `client` -> Start the client _only_
-   `start` -> Same as server script above, used by deploy
-   `init` -> runs npm install on both client and server

\* Server still only serves the build folder of react client

### Default env files:

You will need to add an environment file to `./client/` when testing the client alone.
You will need an environment file in `./server/` for testing a client build & server. This will be the env for production.

Default env contents:

-   `REACT_APP_TEST=Env_var_test`
-   `REACT_APP_BASEURL=http://localhost:3000`
-   `REACT_APP_APIURL=http://localhost:3000/api`
-   `REACT_APP_AUTH_DOMAIN=*INSERT AUTH0 DOMAIN*`
-   `REACT_APP_AUTH_CLIENTID=*INSERT AUTH0 CLIENT ID*`
-   `PORT=3000`

### Default client routes

| Route        | Expectation                                                                 |
| ------------ | --------------------------------------------------------------------------- |
| `/`          | Landing Page                                                                |
| `/authorize` | Redirect page from Auth0. Send user data to backend and redirect to Landing |
| `*`          | 404 Page                                                                    |

### Default API test routes

You will need to have your Postgres DB already set up, with the .env file containing your connection ssl. All backend routes will begin with `/api/`

| Route       | Expectation                                       |
| ----------- | ------------------------------------------------- |
| `/sanity`   | Basic json response                               |
| `/ages`     | Return a sum of all user_age's in the users table |
| `/user/:id` | Return a users data where user_id => :id          |
