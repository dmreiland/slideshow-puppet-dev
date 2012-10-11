<!SLIDE>

# Using git aliases

* Global configuration file: `~/.gitconfig`
* By default an alias for a git command

<div></div>

    @@@ properties
    [alias]
      wdiff = diff --word-diff
      cp = cherry-pick

<div></div>

* Can also be a shell script

<div></div>

    @@@ properties
    [alias]
      safepush = !sh -c 'git pull --rebase && git push'
      tags = !sh -c 'git tag | sort -V'


<!SLIDE>
# Tools

* tig
* giggle
* gitk

