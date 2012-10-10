<!SLIDE>

# UnifiedPost Puppet Tree

<!SLIDE>

# Our tree layout

* manifests
  * classes
  * nodes
* modules
  * upstream
  * internal
  * meta
* hiera

<!SLIDE>
# Manifests

* Nodes
  * Based on hostname (not fqdn)
* Classes
  * General purpose
  * Configure other modules
  * Use hiera() functions here.

<!SLIDE>
# Modules

* modules/upstream
  * Mirrored internally.
  * Push to upstream (https://github.com/UnifiedPost/)
  * Keep in sync (when needed).

<!SLIDE>

* modules/internal
  * UnifiedPost specific modules
* modules/meta
  * Classes (manifests/classes)
  * Autoloader support
  * Better overview

<!SLIDE hiera_configuration>
# Hiera configuration

* /etc/puppet/hiera.yaml
* hierarchy

<pre id="hieracfg" style="font-size: 200%; margin-top:20px;">
:hierarchy: - %{environment}/%{up_platform}/hosts/%{fqdn}
            - %{environment}/%{up_platform}/%{class_name}
            - %{environment}/%{up_platform}/platform
            - %{environment}/%{domain}
            - %{environment}/environment
            - %{domain}
            - %{hostname}
            - common
</pre><hr/><pre style="font-size: 200%; margin-top:10px;">
.../hieradata/develop/up/hosts/service01.up.dev.be01.uni.yaml
.../hieradata/develop/up/manifests::up.yaml
.../hieradata/develop/up/platform.yaml
...
.../hieradata/develop/environment.yaml
.../hieradata/common.yaml
</pre>

<script type="text/javascript">
<!--
var keywords = [
  "%{environment}|%{fqdn}|%{domain}|%{hostname}",
  "%{up_platform}",
  "%{class_name}"
]
var index = 0;
$(".hiera_configuration").bind("showoff:show", function(event) {
  index = 0;
});

$(".hiera_configuration").bind("showoff:next", function(event) {
  if (index < keywords.length) {
    event.preventDefault();
    var replacers = keywords[index].split("|");
    var  color = "#dddd" + (30+ (index * 30));
    jQuery.each(replacers, function(i,str) {
      regexp = new RegExp(''+str + '', 'g');
      $('#hieracfg').html($('#hieracfg').html().replace(regexp, "<span style='background-color: "+color +";'>" + str + "</span>"));
    });
    index += 1;
  }
});
--></script>

<!SLIDE>
# Puppet masters

* One puppet master for each env
  * dev, uat, prod, ...
* A master serves multiple platforms
  * p2p, ttpo, up, ...
* Packaged
  * up-puppet-tree-base (bootstrap)
  * up-puppet-tree-...
* Configuration in hiera (or ENC)


<!SLIDE lefty>
# Jenkins

* [Puppet-tree pipelines](http://jenkinsmaster02.tools.be01.uni/view/Puppet%20Tree/)

We have 2 large pipelines:

* Develop
* Release

<!SLIDE>
# Develop Pipeline

1.  commit / push
2.  jenkins
    1.  syntax check
    2.  style check
    3.  package
        <ul>
          <li>up-puppet-tree-develop</li>
          <li>/etc/puppet/environments/develop</li>
        </ul>
    4.  deploy to repository
3.  puppetmaster
    * updates package (currently script)

<!SLIDE>
# Release Pipeline

* master branch only
* tag check
* package
  * up-puppet-tree-TAGNAME
  * /etc/puppet/environments/TAGNAME

<!SLIDE>
# Hiera pipeline

* commit + push: only master branch.
* jenkins
  * package (always in /etc/puppet/hieradata)
  * deploy
* puppetmaster
  * updates package.
