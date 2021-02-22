
**Distro upgrade**

```
sudo apt-get update && sudo apt-get dist-upgrade

sudo apt update
sudo apt install mariadb-server
sudo mysql_secure_installation

sudo apt update && sudo apt upgrade
sudo apt -y install software-properties-common
sudo apt-key adv --fetch-keys 'https://mariadb.org/mariadb_release_signing_key.asc'
sudo add-apt-repository 'deb [arch=amd64] http://mariadb.mirror.globo.tech/repo/10.5/ubuntu focal main'

sudo apt update
sudo apt install mariadb-server mariadb-client
sudo mysql_secure_installation 

nano /etc/mysql/my.cnf

bind-address = 0.0.0.0
systemctl restart mariadb

netstat -ant | grep 3306
tcp        0      0 0.0.0.0:3306            0.0.0.0:*               LISTEN
```
