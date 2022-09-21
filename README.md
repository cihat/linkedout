# Linkedout

![Project ScreenShot](https://user-images.githubusercontent.com/57585087/163198891-881d4046-f9a9-4b88-9a1a-61c0d0c87b9e.png)

![Project ScreenShot](https://user-images.githubusercontent.com/57585087/163198910-bc7f78b0-67e7-40aa-adf9-0b9e964ec721.png)

![Project ScreenShot](https://user-images.githubusercontent.com/57585087/163198911-6082a517-cb01-4151-9ed9-af031b840eb2.png)

## Running project

```sh
$ docker-compose up
```

## Accessing the linkedout from a browser

The starter linkedout works with a load balancer that binds to ports 80 and 443. It currently serves the domain http://linkedout.localhost. In order to reach the frontend through the linkedout, you need to edit your `hosts` file (usually under `/etc/hosts` in UNIX environments and `C:\Windows\System32\Drivers\etc\hosts` in Windows) and add the following line:

```
127.0.0.1 linkedout.localhost
```

Now if you visit http://linkedout.localhost, you will be greeted with the frontend starter project.

## Changing the local domain

If you wish to use a domain name other than http://linkedout.localhost, simply set the environment variable `DOMAIN` to any domain you want.

```sh
$ DOMAIN=another-domain.localhost docker-compose up
```

You then also need to update your `hosts` file accordingly.

## Debugging

You can debug the backend while it's running in VSCode. Instead of running `docker-compose up`, run the following command:

```sh
$ docker-compose -f docker-compose.yml -f docker-compose.debug.yml up
```

This starts the backend service in the debug mode, so you can use the built-in debug task `Attach to backend` to debug your backend service.

# Running tests

## Running backend tests

```sh
$ cd backend
$ npm i
$ npm test
```

## Running frontend tests

```sh
$ cd frontend
$ npm i
$ npm test:unit
$ npm test:e2e
```

# Linting

Run `npm install` on the root folder and it will set up a pre-commit hook to lint the staged files. You will also have two lint commands, `npm run lint` and `npm run lint-staged` that you can run on the root folder.

These commands run the individual `lint` and `lint-staged` scripts in both the `frontend` and the `backend` folders, and they will respect individual configurations of these folders.

# License

MIT License

Copyright (c) 2020 Cihat Salik

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
