<!SLIDE>

# Networking

* Host only networking.
  * `config.vm.network :hostonly, "192.168.168.2"`
* Bridged networking.
* Port forwarding
  * Access from outside the host only network.
  * `config.vm.forward_port 80, 8080` will allow you to connect to http://localhost:8080

<!SLIDE lefty>

## Example network config

    @@@ ruby
    Vagrant::Config.run do |config|
      config.vm.define :web do |vm_config|
        vm_config.vm.network :hostonly, "192.168.168.2"
        vm_config.vm.forward_port 80, 9000
        vm_config.vm.provision :shell do |shell|
          shell.path = "scripts/deploy_webserver.sh" # Custom script.
          shell.args = "192.168.168.3" # Use this to configure something
        end
      end
      config.vm.define :db do |vm_config|
        vm_config.vm.network :hostonly, "192.168.168.3"
        vm_config.vm.provision :shell do |shell|
          shell.path = "scripts/deploy_dbserver.sh"
        end
      end
    end

