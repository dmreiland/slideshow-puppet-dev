<!SLIDE>

# Required tools

* text-editor (vim)
* git
* virtualbox (v4.x)
* ruby + rubygems (1.8.x)
* bash-completion

<!SLIDE>

* Install git bash completion [https://raw.github.com/git/git/master/contrib/completion/git-completion.bash](https://raw.github.com/git/git/master/contrib/completion/git-completion.bash)
* Setup your bash prompt


    export PS1='\[\033[01;32m\]\u@\h\[\033[01;34m\] \w$(__git_ps1 " \[\033[01;36m\][git: %s]\[\033[01;34m\]") \$\[\033[00m\] '
