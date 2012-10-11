<!SLIDE>
# Working in the tree

* Development is mainly in submodules.
* Always check what branch you are on!

<!SLIDE>
# Submodules dev cycle.

* Working in a submodule (on the develop branch)
  * edit, stage (`git add`), `git commit` (and repeat)
  * `git push`
* Go to parent repository
  * stage (`git add`), `git commit` (and repeat)
  * `git pull --rebase`
  * `git push`

<!SLIDE>
# Releasing a puppet module

* Use git flow to release
* Update parent tree
