# nightmarejs-digitalocean-ubuntu

Spin up Digital Ocean Ubuntu Droplet

Update apt-get repos

`apt-get update`

Install git

`apt-get install git`

Install xvfb and other dependacies

`apt-get -y --force-yes install make unzip g++ libssl-dev git xvfb x11-xkb-utils xfonts-100dpi xfonts-75dpi xfonts-scalable xfonts-cyrillic x11-apps clang libdbus-1-dev libgtk2.0-dev libnotify-dev libgnome-keyring-dev libgconf2-dev libasound2-dev libcap-dev libcups2-dev libxtst-dev libxss1 libnss3-dev gcc-multilib g++-multilib`

Install node (https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

`curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -`
`sudo apt-get install -y nodejs`

Clone this repo

`git clone git clone https://github.com/purplecones/nightmarejs-digitalocean-ubuntu.git`

Install npm dependancies

`cd nightmarejs-digitalocean-ubuntu`
`npm install`

Run

`xvfb-run node --harmony index.js`
