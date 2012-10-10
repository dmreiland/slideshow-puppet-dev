<!SLIDE>

# Configuration #

* Vagrantfile.
* Properly documented.
* Global configuration / Single VM
* Multiple VMs.
  * Inherit defaults from global.

<!SLIDE>
# Configuration options

    @@@ ruby
    # Name of the box to use
    config.vm.box = "name"

    # URL of the box to fetch if it does not exist yet
    config.vm.box_url = "http://url_to/v.box"

    # Enable GUI mode. Will show a virtualbox window for your vm
    config.vm.boot_mode = :gui

    # Add a shared folder to be mounted on the guest vm
    config.vm.share_folder "sharedfolder", "/path/on/vm", "local/path"


