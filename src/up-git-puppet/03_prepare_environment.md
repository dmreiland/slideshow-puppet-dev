<!SLIDE>
# Update environment 

* Add required rubygem rpms for hiera
* Adjust scripts to sync hieradata
* Put a hiera.yaml file in place

<!SLIDE>
# Add rubygems

    @@@ sh
    cd ~/vagrant/packages/
    mkdir rpms
    cd rpms
    REPO_URL="http://pulp01.csn.be01.uni/pulp/repos/dolly/up/upcust"
    wget $REPO_URL/rubygem-json-1.7.5-1.x86_64.rpm
    wget $REPO_URL/rubygem-hiera-1.1.0-1.noarch.rpm
    wget $REPO_URL/rubygem-hiera-puppet-1.0.0-1.noarch.rpm
    cd ..
    ln -sf rpms/rubygem-json-1.7.5-1.x86_64.rpm 01_gem-json.rpm
    ln -sf rpms/rubygem-hiera-1.1.0-1.noarch.rpm 02_gem-hiera.rpm
    ln -sf rpms/rubygem-hiera-puppet-1.0.0-1.noarch.rpm \
        03_gem-hiera-puppet.rpm

<!SLIDE>
# Adjust scripts

    @@@ sh
    # scripts/run_puppet.sh
    ## add
    rsync -alrcWt --del --progress --exclude=.git \
      /vagrant/hieradata /etc/puppet/

    cp /vagrant/hiera.yaml /etc/puppet

    puppet ...


<!SLIDE>
# Hiera configuration file
<pre style="font-size: 20px; ">
---
:backends: - yaml
           - puppet

:logger: console

:hierarchy: - %{environment}/%{up_platform}/hosts/%{fqdn}
            - %{environment}/%{up_platform}/%{class_name}
            - %{environment}/%{up_platform}/platform
            - %{environment}/%{domain}
            - %{environment}/environment
            - %{domain}
            - %{hostname}
            - common

:yaml:
  :datadir: /etc/puppet/hieradata

:puppet:
  :datasource: data
</pre>

