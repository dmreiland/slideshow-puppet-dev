<!SLIDE>

# Installing Vagrant #

* emerge vagrant
* yum install vagrant
* apt-get install vagrant
* rubygems

<!SLIDE>

# Rubygems

* Prerequisites:
  * Install ruby and rubygems
  * Create a ~/.gemrc file
<pre style="margin-top: 10px; font-size: 25px;">
gem: --local --gen-rdoc --run-tests
install: --no-ri --no-rdoc
update: --no-ri --no-rdoc
</pre>

<!SLIDE play_command>

# Install the gem

<div class="command" id="vagrant_installing_vagrant" style="height: 500px; width: 900px;"></div>

<script>
  $("#vagrant_installing_vagrant").pias();
</script>
