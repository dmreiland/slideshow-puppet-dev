<!SLIDE>

# Updating the tree

* Do it before you start working
* If you already have commits that have not been pushed:
  `git pull --rebase`
* Update the submodules: This will set the commit in your submodule to what
  has been committed in the parent repository.

<div></div>

    @@@ sh
    ~/vagrant/puppet $ git pull --rebase
    ~/vagrant/puppet $ git submodule update
