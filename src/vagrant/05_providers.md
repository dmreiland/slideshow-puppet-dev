<!SLIDE lefty>


# Provision

* Available provision types:
  * shell
  * puppet
  * chef
  * [http://vagrantup.com/v1/docs/provisioners.html](http://vagrantup.com/v1/docs/provisioners.html)
* Configuration

<div class="parserfix"></div>

    @@@ ruby
    Vagrant::Config.run do |config|
      config.vm.provision :shell do |shell|
        shell.path = "scripts/my_script.sh"
        shell.args = "custom args"
      end
    end

<!SLIDE lefty>
## Shell provisioner ##

Some snippets.

    @@@ sh
    # Inside scripts/my_script.sh
    # Installs all rpms in the extra_packages folder.

    for f in /vagrant/extra_packages/*.rpm; do
      yum localinstall -y `readlink -f $f` || exit 1;
    done

<div></div>

    @@@ sh
    # Inside scripts/my_script.sh
    # Applies patches to the puppet tree
    for f in /vagrant/patches/*.patch; do
      echo "Executing patch: $f";
      patch -N -d /etc/puppet -p2 < $f || exit 1;
    done


