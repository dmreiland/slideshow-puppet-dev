<!SLIDE>

# Running puppet

* Option 1: Use the puppet provisioner
  * Only runs puppet. No possibility to install packages first.
* Option 2: Use the puppet-server
  * Requires a working puppet-server
* Option 3: Use a shell script
  1. Mount folders
     * Faster than copying first.
     * VirtualBox Guest utilities required.
  2. Rsync folders
     * Copy of the tree on machine
     * Allows of patching the tree before running

<!SLIDE>
## Test Structure

    @@@ sh
    ~/vagrant $ mkdir scripts
    ~/vagrant $ mkdir -p puppet/{manifests/nodes,manifests/classes,modules}
    ~/vagrant $ echo -e "import 'classes/*.pp'\nimport 'nodes/*.pp'" > \
        puppet/manifests/site.pp
    ~/vagrant $ touch puppet/manifests/classes/default.pp
    ~/vagrant $ echo "node default { notify {'It works': } }" > \
        puppet/manifests/nodes/default.pp


<!SLIDE lefty>
## Using the puppet provisioner

    @@@ ruby
    # Vagrantfile
    Vagrant::Config.run do |config|
      config.vm.define :web do |vm_config|
        vm_config.vm.host_name = "webserver01.example.com"
        vm_config.vm.provision :puppet do |puppet|
          puppet.manifests_path = "puppet/manifests"
          puppet.manifest_file = "site.pp"
          puppet.module_path = "puppet/modules"
        end
      end
    end

Run vagrant

    @@@ sh
    ~/vagrant $ vagrant up web

<!SLIDE slimcode>
## Using a shell script

    @@@ ruby
    # Vagrantfile
    config.vm.define :scripted do |vm_config|
      vm_config.vm.host_name = "webserver02.example.com"
      vm_config.vm.provision :shell do |shell|
        shell.path = "scripts/run_puppet.sh"
      end
    end

<div></div>

    @@@ sh
    # scripts/run_puppet.sh
    for f in /vagrant/packages/*.rpm; do
      yum localinstall -y `readlink -f $f` || exit 1;
    done
    rsync -alrcWt --del --progress --exclude=.git /vagrant/puppet/* \
        /etc/puppet/
    puppet apply --modulepath /etc/puppet/modules/ \
        /etc/puppet/manifests/site.pp

