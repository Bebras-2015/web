Install [Docker](https://www.docker.com/) && [Azk.io](http://docs.azk.io/en/installation/)
```
curl -sSL https://get.docker.com/ | sh
curl -Ls http://azk.io/install.sh | bash
```
* Fedora only
    * stop dnsmasq service `systemctl stop dnsmasq.service`
    * stop firewall `sudo systemctl stop firewalld`
    * restart docker service
        - `sudo service docker stop`
        - `sudo service docker start`
    * To check if its working `azk shell --image azukiapp/alpine -- ping -c 4 dev.azk.io`

Run web
```
azk start
```
Connect to containers shell
```
azk shell web
```
Install additional applications
```
npm install -g grunt-cli && npm install -g bower && bower install --allow-root && npm install && grunt
```
Execute bower | grunt | npm | composer
```
azk shell grunt watch
```
Open browser
```
http://web.dev.azk.io
```