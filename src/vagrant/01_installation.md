<!SLIDE bullets incremental transition=fade>

# Installing Vagrant #

## Using packages

* emerge vagrant
* yum install vagrant
* apt-get install vagrant

## Using rubygems

<!SLIDE>

# Rubygems

## Prerequisites

* Install ruby and rubygems
* Create a .gemrc file

<pre>
gem: --local --gen-rdoc --run-tests
install: --no-ri --no-rdoc
update: --no-ri --no-rdoc
</pre>

<!SLIDE play_command>

# Installing the vagrant gem

<div class="command" id="vagrant_installing_vagrant" style="height: 500px; width: 900px;"></div>

<script>
  $("#vagrant_installing_vagrant").pias();
</script>
