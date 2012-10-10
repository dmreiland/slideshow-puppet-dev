<!SLIDE lefty>

# Multiple VMs

Configuration

    @@@ ruby
    Vagrant::Config.run do |config|
      config.vm.define :vm1 do |vm_config|
        # custom configuration
      end
      config.vm.define :vm2 do |vm_config|
        # custom configuration
      end
    end

You will need to include the vm name in each command.

    @@@ sh
    ~ $ vagrant up vm1
    ~ $ vagrant destroy -f vm1

