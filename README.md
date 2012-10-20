Use this presentation together with showoff. It requires some patches to be applied to the default showoff repository. Find them here:
https://github.com/vStone/showoff

You will also have to fetch the submodule content.

In short:

1. Install the (patched) showoff gem

    git clone https://github.com/vStone/showoff
    cd showoff
    gem build showoff.gemspec
    gem install showoff
    cd ..

2. Get the presentation and run it.

    git clone https://github.com/vStone/slideshow-puppet-dev.git
    cd slideshow-puppet-dev
    git submodule init
    git submodule update
    showoff serve

3. Open the presentation
