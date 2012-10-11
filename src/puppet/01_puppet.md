<!SLIDE>
# Puppet

* Language guide:<br/>
  [http://docs.puppetlabs.com/puppet/2.7/reference/lang_summary.html](http://docs.puppetlabs.com/puppet/2.7/reference/lang_summary.html)
* Type reference:<br/>
  [http://docs.puppetlabs.com/references/2.7.18/type.html](http://docs.puppetlabs.com/references/2.7.18/type.html)
* Function reference:<br/>
  [http://docs.puppetlabs.com/references/2.7.18/function.html](http://docs.puppetlabs.com/references/2.7.18/function.html)


<!SLIDE>
# Writing a new module

* Setup your test environment (vagrant)
* Create module
  * basic layout
  * git repo
  * git remote


<!SLIDE>
# Test environment

## Vagrantfile

    @@@ ruby
    # Vagrantfile
    Vagrant::Config.run do |config|
      config.vm.define :test do |test|
        test.vm.box = "centos6"
        test.vm.host_name = "test01.example.com"
        test.vm.provision :shell do |shell|
          shell.path = "scripts/run_puppet.sh"
        end
      end
    end

<!SLIDE>
## Node configuration

    @@@ puppet
    # puppet/manifest/nodes/test.pp
    node /^test/ {
      include something
    }

<!SLIDE>
# Module layout

    @@@ sh
    # cd puppet/modules/internal
    mkdir -p something/{manifests,templates}
    cd something
    git init .
    touch README
    git add README
    git commit -m 'Initial commit'

<!SLIDE>
# Required files

    @@@ puppet
    # something/manifests/init.pp
    # = Class: something
    #
    # Start with adding some docs on what the module
    # should do. Documentation is in the rdoc format.
    #
    class something {
      notify {'I do something!':}
    }

<!SLIDE>

# Autoloader layout

* Saves us from doing `import 'class.pp'` statements.
* `include something` looks in `MODULES/something/manifests/init.pp`
* `include something::params` ...  `MODULES/something/manifests/params.pp`
* `include something::deep::down` ... `MODULES/something/manifests/deep/down.pp`

<!SLIDE>
# Using resources

* Files
  * files
  * templates
* Packages

<!SLIDE>
## Files

* Referencing a file:

<div></div>

    @@@ puppet
    file {'myfile':
      path   => '/path/to/file/on/host'
      source => "puppet:///modules/${module_name}/file"
    }


<!SLIDE>
## Templates

* Calling / including a template

<div></div>

    @@@ puppet
    file {'myfile':
      path    => '/path/to/file/on/host',
      content => template("${module_name}/template.erb")
    }

<div></div>

* Include a header

<div></div>

    @@@ ruby
    ### File managed with puppet ###
    ## Served by:        '<%= scope.lookupvar('::servername') %>'
    ## Module:           '<%= scope.to_hash['module_name'] %>'
    ## Template source:  '<%= template_source %>'

## Packages

* Use the alias of a package to depend on

    @@@ puppet
    package {'httpd':
      ensure => 'installed',
      alias  => 'apache',
    }

    service {'httpd':
      ensure  => 'running',
      require => Package['apache'],
    }

<!SLIDE>
# Using parameters

    @@@ puppet
    class something::params (
      $foo = 'bar'
    ) {
      $default_foo = $::operatingsystem ? {
        /(?i:centos|redhat)/ => 'centos-foo',
        default              => 'default-foo',
      }
    }

    class x {
      require something::params
      $foo = $::something::params::default_foo
    }

<!SLIDE>

## Parameters in a node

    @@@ puppet
    class {'something::params':
      foo => 'override-foo',
    }
    include something

# Puppet-Lint

* Style check
  * trailing whitespace
  * alignment
* We have a jenkins job
* Run puppet lint locally too!

    @@@ sh
    gem install puppet-lint


# Using hiera

* With or without default
* Define the value in the right scope.

<div></div>

    @@@ puppet
    node /^test/ {
      class {'something::params':
        foo => hiera('something-foo', 'hiera-default-foo'),
      }
      include something
    }

