<!SLIDE lefty>

# Boxes

* stored in `~/.vagrant.d/boxes`
* commands
  * `vagrant box add [name] [filename]`
  * `vagrant box add [name] [url]`
  * `vagrant box list`

Configuration:

    @@@ ruby
    Vagrant::Config.run do |config|
      config.vm.box = "name"
    end

<!SLIDE>
# Adding a box

<div class="command" id="vagrant_box_add" style="height: 500px; width: 900px;"></div>

<script type="text/javascript">
<!--
  $("#vagrant_box_add").pias();
-->
</script>
