<!SLIDE>

# GIT Flow
![git-flow](img/git-flow.png)

<!SLIDE>
[https://github.com/nvie/gitflow](https://github.com/nvie/gitflow)

* Uses branches
  * master
  * develop
  * release/...
  * hotfix/...
  * feature/...
  * ...
* Master branch is always stable (and tagged)
* Merge to the master branch when work is done and tested.

<!SLIDE>

# Installation

See the github repository for more information.

<!SLIDE>

# Initialize

* Has to be done once for each repository.
* Configuration is stored in the repositories gitconfig file.

<div></div>

    git flow init

# Feature branches

    git flow feature start <name_of_feature>
    git flow feature start <name_of_feature> <base_branch>

    git branch -a

<!SLIDE>

# Releases

* Creates a (short-lived) branch
  * Merged in master branch
  * Merged in develop branch

<div></div>

    @@@ sh
    git flow release start [version]
    # Make some last minute adjustments.
    # Increase the version number, add a changelog,...
    git flow release finish [version]

<!SLIDE>
# Hotfixes

* Mostly for fixing quick small bugs.
* Similar to release branch.

<div></div>

    @@@ sh
    git flow hotfix start [version] master
    ## fix it
    git flow hotfix finish [version]

<!SLIDE>
# Features

* Based on the develop branch
* For longer development flows that might bother others.
* Example usecase: puppet-apache module.

![github network](/file/media/img/gitflow-example.png)


