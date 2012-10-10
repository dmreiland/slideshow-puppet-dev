<!SLIDE>
# GIT

<!SLIDE>
# Getting started
Configure some general settings.

    git config --global user.name "Jan Vansteenkiste"
    git config --global user.email "jan@vstone.eu"

    git config --global color.diff auto
    git config --global color.status auto
    git config --global color.branch auto

<!SLIDE>
# Committing

## Staging area

* Contains changes to be added in next commit.

* `git add <filename>`
* `git add -p <filename>`

## Commit

* `git commit -m 'message'`

<!SLIDE>

<div class="command" id="git_stage_parts" style="height: 500px; width: 900px;"></div>

<script type="text/javascript">
  $("#git_stage_parts").pias();
</script>

<!SLIDE lefty>
# Branches

Get a list of all branches:

    git branch -a

Create a branch:

    git branch [branch]
    git checkout [branch name]

or

    git checkout -b [branch]

