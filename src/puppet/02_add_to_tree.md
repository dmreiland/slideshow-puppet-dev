<!SLIDE>
# Puppet modules and GIT

* Push its code to git
* Add or update the submodule to parent repository.
* Add existing submodules to the repository.

<!SLIDE>
# Push the module to git

    @@@ sh
    git remote add origin git@......
    # create a remote named origin

    git push -u origin master
    # push our master to the origin remote (master branch)
    # also setup upstream so next time we can do
    git push

<!SLIDE>
# Adding a new submodule

* Must be done in the (parent) repository root.
* Submodule must contain at least one commit.

    @@@ sh
    git submodule add git@link.to.repo modules/internal/something
    # This will add the submodule to the index
    git commit -m 'Added submodule'
    git push

<!SLIDE>
# Updating a submodule

    @@@ sh
    git add modules/internal/something
    ## Update hash of something to our index

    git commit -m 'Updated something module'

# Adding an existing submodule

    @@@ sh
    git submodule add git@link.to.repo modules/internal/exists
    git commit -m 'Added exising submodule'


